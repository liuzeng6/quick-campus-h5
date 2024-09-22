<template></template>
<script setup>

import { onLaunch } from '@dcloudio/uni-app'
import { useAppDataStore, useUserStore } from './stores';
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'

import { getConfigs, getTags } from './api';

import appConfig from './utlis/config';
import getUrlParam from './utlis/getUrlParam';

const userStore = useUserStore();

const baseURL = process.env.NODE_ENV == "development" ? 'http://localhost:3000' : "https://cymmc.top:3000";


const login = () => {
	const instance = axios.create({
		baseURL,
		timeout: 5000,
		adapter: mpAdapter,
	});
	return new Promise((resolve, reject) => {
		uni.login({
			provider: 'weixin',
			onlyAuthorize: true,
			success(res) {
				instance(`/weixin/openid?code=${res.code}`).then(({ data }) => {
					if (data.code == 1) {
						resolve(data.data);
					} else {
						reject(data);
					}
				})
			},
			fail(err) {
				if (localStorage.openid) {
					resolve(localStorage.openid);
				} else {
					try {
						let openid = getUrlParam(location.href, "openid");

						if (openid) {
							instance(`/weixin/oauth?code=${openid}`).then(({ data }) => {
								if (data.code == 1) {
									resolve(openid);
								} else {
									reject(err);
								}
							}, (err) => {
								reject(err)
							});
						} else {
							reject(err);
						}
					} catch (e) {
						reject(e)
					}

				}
			}
		});
	})
}

const appData = useAppDataStore().config;
onLaunch(async () => {
	try {
		let token = uni.getStorageSync('openid');
		let flag = false;
		let openid = "";
		if (token) {
			// 用户已经存在了
			openid = token;
		} else {
			flag = true;
			openid = await login();
		}
		appConfig.openid = openid;

		const instance = axios.create({
			baseURL,
			timeout: 5000,
			adapter: mpAdapter,
			headers: { 'Authorization': openid },
		});
		let { data: { data } } = await instance("/user/profile");
		if (data.msg == 'register') {
			// 用户第一次来要注册
			uni.setStorageSync('openid', openid);
			let { data: { data } } = await instance("/user/profile");
			userStore.userInfo.value = data;
		} else {
			if (flag) {
				uni.setStorageSync('openid', openid);
			}
			userStore.userInfo.value = data;
		}
	}
	catch (e) {
		console.log(e);
		uni.showToast({
			icon: "none",
			title: '不支持的设备类型',
			duration: 2000
		});
	}
	finally {
		let { data: { data } } = await getTags();
		appData.tags = data;
		let { data: { data: configs } } = await getConfigs();
		// console.log(configs);
		appData.spread = configs.spread;
		appData.qc_code = configs.qc_code;
		appConfig.auth = true;
	}
})

</script>

<style>
/*每个页面公共css */
page {
	background-color: #f3f3f3;
}
</style>
