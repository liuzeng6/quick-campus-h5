<template>
	<scroll-view :scroll-y="true" id="page">
		<view class="card">
			<view class="above">
				<view class="avatra">
					<image :src="userInfo.avatar"></image>
				</view>
				<view class="sign">
					<view class="nickname">{{ userInfo.nickname }}</view>
					<view class="id">用户ID：{{ userInfo.id }}</view>
				</view>
				<view class="edit" @click="edit">
					编辑资料<uni-icons type="right" size="30rpx"></uni-icons>
				</view>
			</view>
			<view class="below">
				<view class="item" v-for="(el, index) in arr" :key="index">
					<view class="text">{{ el.text }}<uni-icons type="right" size="30rpx"></uni-icons></view>
					<view class="count">{{ el.count }}</view>
				</view>
			</view>
		</view>
		<view class="group">
			<view class="item" @click="handleCLick">
				<view><uni-icons type="gift-filled" size="44rpx"></uni-icons></view>
				<view class="text">校园认证</view>
				<view class="right">{{ `未认证` }}<uni-icons type="right" color="#B8B8B8"></uni-icons></view>
			</view>
		</view>
		<view class="group">
			<view class="item" @click="toStandard">
				<view><uni-icons type="gift-filled" size="44rpx"></uni-icons></view>
				<view class="text">社区规范&小黑屋</view>
				<view class="right"><uni-icons type="right" color="#B8B8B8"></uni-icons></view>
			</view>
			<view class="item" @click="handleCLick">
				<view><uni-icons type="gift-filled" size="44rpx"></uni-icons></view>
				<view class="text">分享好友</view>
				<view class="right"><uni-icons type="right" color="#B8B8B8"></uni-icons></view>
			</view>
			<view class="item" @click="handleCLick">
				<view><uni-icons type="gift-filled" size="44rpx"></uni-icons></view>
				<view class="text">联系墙墙</view>
				<view class="right"><uni-icons type="right" color="#B8B8B8"></uni-icons></view>
			</view>
		</view>
		<view class="group">
			<view class="item" @click="handleCLick">
				<view><uni-icons type="gift-filled" size="44rpx"></uni-icons></view>
				<view class="text">问题反馈</view>
				<view class="right"><uni-icons type="right" color="#B8B8B8"></uni-icons></view>
			</view>
			<view class="item" @click="handleCLick">
				<view><uni-icons type="gift-filled" size="44rpx"></uni-icons></view>
				<view class="text">清除缓存</view>
				<view class="right"><uni-icons type="right" color="#B8B8B8"></uni-icons></view>
			</view>
			<view class="item" @click="handleCLick">
				<view><uni-icons type="gift-filled" size="44rpx"></uni-icons></view>
				<view class="text">重新登录</view>
				<view class="right"><uni-icons type="right" color="#B8B8B8"></uni-icons></view>
			</view>
		</view>

		<view class="product">
			<view class="version">v1.0.0</view>
			<view class="name">一键校园@2024</view>
		</view>
	</scroll-view>
	<tabbar checkedIndex='4'></tabbar>
</template>

<script setup>
let count = {
	"collection_count": 3,
	"commented_count": 4,
	"liked_count": 1,
	"topic_count": 5
}
let arr = [{
	text: "帖子",
	count: count.topic_count,
	path: ""
}, {
	text: "点赞",
	count: count.liked_count,
	path: ""
}, {
	text: "评论",
	count: count.commented_count,
	path: ""
}, {
	text: "收藏",
	count: count.collection_count,
	path: ""
},]

let userInfo = {
	avatar: "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
	nickname: "小猫6237890kfjjf",
	id: 9122,
}

const edit = () => {
	// 
	console.log("跳转到用户资料修改页面");
}

const handleCLick = () => {
	console.log("object");
}

const toStandard = () => {
	uni.navigateTo({
		url: '/pages/standard/index'
	});
}
</script>

<style scoped lang="scss">
#page {
	background-color: #F6F6F6;
	padding-bottom: 200rpx;

	.card {
		background-color: #FFFFFF;
		height: 280rpx;
		box-sizing: border-box;
		padding: 0rpx 25rpx;

		.above {
			box-sizing: border-box;
			padding-top: 10rpx;

			.avatra {
				width: 100rpx;
				height: 100rpx;
				border: 1rpx solid #E7E7E7;
				border-radius: 50%;
				box-shadow: 0rpx 0rpx 5rpx #ccc;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.sign {
				line-height: 50rpx;
				flex: 1;
				margin-left: 20rpx;
				text-align: left;

				.nickname {
					color: 010101;
					font-weight: 600;
				}

				.id {
					width: 160rpx;
					height: 35rpx;
					border: 1px solid #F6F6F6;
					border-radius: 20rpx;
					color: #797979;
					font-size: 22rpx;
					line-height: 35rpx;
					text-align: center;
				}
			}

			.edit {
				padding-top: 10rpx;
				font-size: 24rpx;
				color: #878787;
			}

			display: flex;
		}

		.below {
			display: flex;
			justify-content: space-around;

			.item {
				margin-top: 15rpx;
				background-color: #F3FBFE;
				border-radius: 15rpx;
				width: 140rpx;
				height: 130rpx;
				box-sizing: border-box;
				padding-left: 20rpx;
				padding-top: 10rpx;
				line-height: 50rpx;

				.text {
					color: #4E5560;
					font-size: 24rpx;
				}

				.count {
					color: #478EFE;
					font-weight: 600;
					font-size: 36rpx;
				}
			}
		}
	}

	.group {
		margin: 25rpx 30rpx 25rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;

		.item {
			font-size: 28rpx;
			margin-left: 35rpx;
			margin-right: 5rpx;
			display: flex;
			height: 110rpx;
			border-bottom: 1rpx solid #ebe8e8;
			line-height: 110rpx;

			.text {
				margin-left: 20rpx;
				flex: 1;
				color: #3B3A48;
			}

			.right {
				font-size: 26rpx;
				margin-left: 15rpx;
				margin-right: 20rpx;
				color: #CBCBCB;
			}
		}
	}

	.product {
		text-align: center;
		color: #C3C2C8;
		line-height: 60rpx;
		font-size: 26rpx;

		.version {
			margin-top: 60rpx;
		}
	}

}
</style>
