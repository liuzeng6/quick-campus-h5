<template>
	<view class="top-btns">
		<view class="">
			<up-icon name="thumb-up" size="24px" color="red"></up-icon>
			&nbsp; &nbsp;
			<text>点赞我的</text>
			&nbsp;
			<text>></text>
		</view>
		<view class="">
			<up-icon name="chat" size="24px" color="#00ff00"></up-icon>
			&nbsp; &nbsp;
			<text>点赞我的</text>
			&nbsp;
			<text>></text>
		</view>
	</view>
	<view class="main"></view>
	<tabbar checkedIndex="3"></tabbar>
</template>

<script setup></script>

<style lang="scss" scoped>
.top-btns {
	display: flex;
	padding: 30rpx;
	justify-content: space-between;
	& > view {
		width: 48%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		align-items: center;
		background-color: #fff;
		border: 1px solid #999;
		border-radius: 5px;
		justify-content: center;
	}
}
.main {
	background-color: #fff;
	width: 750rpx;
	height: calc(100vh - 260rpx);
}
</style>
