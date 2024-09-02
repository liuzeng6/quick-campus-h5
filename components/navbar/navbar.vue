<template>
	<view class="nav">
		<view :style="'height:' + statusHeight + 'rpx;background-color:#f3f3f3'"></view>
		<view class="nav-head" v-if="isHome"
			:style="'height:' + height + 'rpx;line-height:' + height + 'rpx;padding-left:20rpx;background-color:#f3f3f3'">
			<text class="school-name">长幼校园圈</text>
			<view style="flex: 1;">
				<navigator url="/pages/search/index" :style="'height:' + menu.height * 2 + 'rpx;line-height:' + lineHeight + 'rpx;margin-top:' +
					(menu.top * 2 - statusHeight) +
					'rpx;margin-left: 32rpx; margin-right:' +
					(menu.width * 2 + 24) +
					'rpx;background-color:#f4f4f4; border-radius: 200rpx; text-align:center;width:260rpx'">
					<image src="../../static/navbar/search.png"></image>
					<text class="search">搜索帖子</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script setup>

import { onMounted, ref, reactive, defineProps, defineEmits } from 'vue'

const props = defineProps({
	isHome: {
		tyope: Boolean,
		default: false
	}
})
const emit = defineEmits(['getStatusHeight'])
// 状态栏高度
const statusHeight = ref(0)
// 内容区域高度
const navHeight = ref(0);
const menuData = (uni.getMenuButtonBoundingClientRect && uni.getMenuButtonBoundingClientRect()) || { width: 87, height: 32, left: 281, top: 24, right: 368 };
// 获取胶囊的位置
const menu = reactive(menuData);
console.log(menu);
// 设置行高
const lineHeight = ref(0)
const height = ref(0)

onMounted(() => {
	setStatusBarHeight()
	let height = statusHeight.value + navHeight.value
	emit('getStatusHeight', height)
})

/**
 * 设置状态栏的高度
 */
const setStatusBarHeight = () => {
	const { system, statusBarHeight, deviceModel } = uni.getSystemInfoSync()
	statusHeight.value = statusBarHeight * 2
	// 是否为苹果用户
	const isIOS = system.indexOf('IOS')
	if (isIOS) {
		navHeight.value = 88
		// 如果苹果用户有灵动岛，则不需要行高
		lineHeight.value = deviceModel.includes('14') || deviceModel.includes('15') ? 0 : menu.height * 2
		height.value = deviceModel.includes('14') || deviceModel.includes('15') ? menu.height * 2 : navHeight.value
	} else {
		navHeight.value = 96
	}
}
</script>

<style scoped>
.nav {
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
	z-index: 99;
	width: 100%;
	background-color: #f3f3f3;
}

.nav-head {
	display: flex;
	/* align-items: center; */
	background-color: #fff;
}

.school-name {
	font-size: 34rpx;
	font-weight: 700;
}

.search {
	color: #b0b0b0;
}

.nav-head image {
	width: 30rpx;
	height: 30rpx;
	margin-right: 20rpx;
}
</style>
