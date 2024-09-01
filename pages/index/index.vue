<template>
	<navbar :isHome='true' @getStatusHeight='getStatusHeight'></navbar>
	<tabbar checkedIndex='0' ></tabbar>
	<view>
		<view class="nav-comp base" :style="'margin-top:' + barHeight + 'rpx'">
			<view class="nav-list">
				<view class="item">
					<view class="img">
						<image src="/static/images/kd.png" mode=""></image>
					</view>
					<view class="text">半价寄快递</view>
				</view>
				<view class="item">
					<view class="img">
						<image src="/static/images/qj.png" mode=""></image>
					</view>
					<view class="text">全景校园</view>
				</view>
				<view class="item">
					<view class="img">
						<image src="/static/images/gj.png" mode=""></image>
					</view>
					<view class="text">实时公交</view>
				</view>
			</view>
		</view>
		<view class="hot base">
			<view class="hot-img">
				<image src="../../static/images/hot.png" mode=""></image>
			</view>
			<view class="hot-swiper">
				<swiper class="swiper" :indicator-dots='false' autoplay :interval='5000' circular :vertical='true' :duration='800'>
					<swiper-item v-for="item in topicList" :key="item.id">
						<view class="swiper-item">
							<view :class="item.id <= 3 ? 'top3' : ''">{{ item.id }}</view>
							<view class="hot-title">{{ item.title }}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="card">
			<view class="card-title">
				<view class="color-active">全部</view>
				<view>二手闲置</view>
				<view>打听求助</view>
				<view>分享生活</view>
				<view>吐槽爆料</view>
				<view>恋爱交友</view>
				<view>拼车拼单</view>
			</view>
			<view class="card-content">
				<view class="card-item">
					<view class="tx">
						<image src="../../static/images/tx.png" mode=""></image>
					</view>
					<view class="info">
						<view class="name">小明</view>
						<view class="time">刚刚</view>
						<view class="content">
							今天星期2今天星期2今天星期2今天星期2今天星期2今天星期2今天星期2今天星期2今天星期2今天星期2
						</view>
						<view class="foot">
							<view class="tag">
								<text>#分享生活</text>
							</view>
							<view class="msg">
								<image src="/static/images/msg.png" mode="widthFix"></image>
								<text>0</text>
							</view>
							<view class="zan">
								<image src="/static/images/zan.png" mode="widthFix"></image>
								<text>0</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {  nextTick, onMounted, ref} from 'vue'
	import { onLoad, onLaunch } from '@dcloudio/uni-app'
	import tabbar from '@/components/tabbar/tabbar.vue'
	import { getTopics } from '../../api/index.js'
	
	let barHeight = ref(0)
	let topicList = ref([])
	
	onMounted(() => {
		getHotTopics()
	})
	
	// 获取navbar高度
	const getStatusHeight= navBarHeight => {
		barHeight.value = navBarHeight
	}
	const getHotTopics = () => {
		getTopics().then(res => {
			topicList.value = res.data.data
		})
	}
</script>

<style>
	@import './index.css';
</style>
