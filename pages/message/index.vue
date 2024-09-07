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
			<view class="message-list">
				<up-empty class="empty" mode="comment" icon="http://cdn.uviewui.com/uview/empty/comment.png"></up-empty>
			</view>
		</view>
	</scroll-view>
	<tabbar checkedIndex="3"></tabbar>
</template>

<script setup>
const toCommented = () => {
	uni.navigateTo({
		url: '/pages/all/commented/index'
	});
};
const toLiked = () => {
	uni.navigateTo({
		url: '/pages/all/liked/index'
	});
};
</script>

<style lang="scss" scoped>
#page {
	background-color: #f4f5f7;
	.container {
		min-height: calc(100vh - 85rpx - 100rpx);
		display: flex;
		flex-direction: column;

		.group-btn {
			display: flex;
			text-align: center;
			justify-content: space-evenly;
			margin: 30rpx 0rpx;

			.item {
				border-radius: 10rpx;
				border: 1px solid #e7e8ea;
				width: 325rpx;
				background-color: #ffffff;
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
			background-color: #ffffff;
			border-radius: 30rpx 30rpx 0rpx 0rpx;
			position: relative;
			.empty {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 100%;
			}
		}
	}
}
</style>
