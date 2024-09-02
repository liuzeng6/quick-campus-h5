<template>
	<view class="tabbar">
		<view class="bar-wrap">
			<block v-for="(item, index) in barList" :key="item.src">
				<view class="item" @click="checkedBar(index)">
					<view :class="item.src.includes('fabu') ? 'item-img fabu' : 'item-img'">
						<image :src="index == props.checkedIndex ? item.active : item.src" mode="widthFix"></image>
					</view>
					<view v-if="!item.src.includes('fabu')" class="item-text-active">{{ item.text }}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script setup>
	import { ref, defineProps, onMounted } from 'vue'
	
	const props = defineProps({
		checkedIndex: {
			default: 0
		}
	})
	
	const barList = ref([
		{ text: '校园', src: '../../static/tabbar/shcool.png', active: '../../static/tabbar/shcool_active.png', href: '/pages/index/index' },
		{ text: '发现', src: '../../static/tabbar/faxian.png', active: '../../static/tabbar/faxian_active.png', href: '/pages/faxian/index' },
		{ src: '../../static/tabbar/fabu.png' },
		{ text: '消息', src: '../../static/tabbar/msg.png', active: '../../static/tabbar/msg-active.png', href: '/pages/message/index' },
		{ text: '我的', src: '../../static/tabbar/user.png', active: '../../static/tabbar/user-active.png', href: '/pages/user/index' },
	])
	
	const checkedBar = index => {
		// checked.value = index
	
		uni.switchTab({
			url: barList.value[index].href
		})
	}
</script>

<style>
	.tabbar{
		width: 100%;
		border-top: 1px solid #ccc;
		height: 120rpx;
		position: fixed;
		bottom: 0rpx;
		background-color: #fff;
	}
	.bar-wrap{
		display: flex;
		justify-content: space-around;
	}
	.item{
		width: 100rpx;
		text-align: center;
	}
	.item-img{
		margin: 20rpx auto 0;
		width: 50rpx;
	}
	.item-img image{
		width: 100%;
		height: 100%;
	}
	.item-text-active {
		color: #5d80e8;
		font-size: 28rpx;
		margin-top: -10rpx;
	}
	.item-text {
		color: #cdcfe3;
		font-size: 28rpx;
		margin-top: -10rpx;
	}
	.fabu {
		width: 80rpx;
		height: 80rpx;
		margin-top: -30rpx;
		padding: 20rpx;
		border-radius: 50%;
		background-color: #fff;
	}
</style>
