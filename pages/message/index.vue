<template>
	<scroll-view :scroll-y="true" id="page">
		<view class="container">
			<view class="group-btn">
				<view class="item" @click="toLiked">
					<view class="icon">
						<uni-icons type="hand-up" size="56rpx" color="#F66560"></uni-icons>
					</view>
					<view class="text">点赞我的</view>
					<view class="right">
						<uni-icons type="right" size="34rpx" color="#3B3849"></uni-icons>
					</view>
				</view>
				<view class="item" @click="toCommented">
					<view class="icon">
						<uni-icons type="hand-up" size="56rpx" color="#07BE75"></uni-icons>
					</view>
					<view class="text">评论我的</view>
					<view class="right">
						<uni-icons type="right" size="34rpx" color="#3B3849"></uni-icons>
					</view>
				</view>
			</view>
			<view class="message-list"></view>
		</view>
	</scroll-view>
	<tabbar checkedIndex="3"></tabbar>
</template>

<script setup>
const toCommented = ()=>{
	uni.navigateTo({
		 url: '/pages/all/commented/index'
	});
}
const toLiked = ()=>{
	uni.navigateTo({
		 url: '/pages/all/liked/index'
	});
}
</script>

<style lang="scss" scoped>
#page {
	background-color: #F4F5F7;

	.container {
		min-height:calc(100vh - 85rpx - 100rpx);
		display: flex;
		flex-direction: column;

		.group-btn {
			display: flex;
			text-align: center;
			justify-content: space-evenly;
			margin: 30rpx 0rpx;

			.item {
				border-radius: 10rpx;
				border: 1px solid #E7E8EA;
				width: 325rpx;
				background-color: #FFFFFF;
				line-height: 100rpx;
				height: 100rpx;
				display: flex;

				.icon {
					margin-left: 50rpx;
				}

				.text {
					color: #393939;
					font-size: 32rpx;
					flex: 1;
				}

				.right {
					margin-right: 50rpx;
				}
			}
		}

		.message-list {
			// height: 1000rpx;
			flex: 1;
			background-color: #FFFFFF;
			border-radius: 30rpx 30rpx 0rpx 0rpx;
		}
	}

}
</style>
