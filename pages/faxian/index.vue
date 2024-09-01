<template>
	<scroll-view style="height: 100vh;" :scroll-y="true">
		<view id="page">
			<view class="header">
				<view class="search">
					<view class="icon" style="width: 36rpx;height: 36rpx;margin: 0rpx 25rpx; margin-top: 10rpx;">
						<image style="width: 100%;height: 100%;" src="../../static/navbar/search.png"></image>
					</view>
					<input type="text" placeholder="搜索帖子和文章" v-model="q" class="input">
				</view>
				<view class="history-title">
					<view class="boldface">
						搜索历史
					</view>
					<view class="space">

					</view>
					<view class="clear" @click="clear()">
						清空
					</view>
				</view>
				<view style="text-align: center;color: #999;margin-top: 15rpx;">
					暂无搜索记录
				</view>
			</view>
		</view>
		<view class="popular">
			<view class="title">
				<view>
					<image style="width: 100%;height: 100%;"></image>
				</view>
				<view style="font-style: italic;font-size: 34rpx;font-weight: 600;margin: 0rpx 15rpx;">热门帖子</view>
				<view style="color: #939299;font-style: italic;font-size: 26rpx;margin-top: 5rpx;">大家都在看</view>
			</view>
			<view class="list">
				<view class="item" v-for="(item, index) in hotList" :key="item.id" @click="handleCLick(item.id)">
					<view :class="index <= 2 ? `color${index}` : 'index'">
						{{ index + 1 }}
					</view>
					<view class="content">{{ item.title }}</view>
					<view style="color: #C7C7C7;font-size: 26rpx;">{{ item.score }}热度</view>
				</view>
			</view>
		</view>
	</scroll-view>

	<tabbar checkedIndex='1'></tabbar>
</template>

<script setup>
import { ref, reactive } from 'vue'
let hotList = reactive([
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
	{
		"id": 1,
		"tid": 5,
		"title": "啊哈哈哈",
		"score": 6789
	},
]);
function handleCLick(id) {
	console.log(id);
}
function clear(id) {
	if (id) {
		console.log(`清除${id}`);
	} else {
		console.log("需要清除全部");
	}
}
let q = ref("");
</script>

<style scoped>
#page {
	background-color: #FFFFFF;
}

.header {
	height: 210rpx;
	background-color: #FFFFFF;
}

.header .search {
	display: flex;
	border-radius: 10rpx;
	margin: 0rpx 30rpx;
	height: 66rpx;
	line-height: 66rpx;
	background-color: #F3F3F3;
}

.header .input {
	line-height: 66rpx;
	height: 66rpx;
}

.header .history-title {
	display: flex;
	margin: 0rpx 30rpx;
	margin-top: 25rpx;
}

.header .history-title .space {
	flex: 1;
}

.header .history-title .boldface {
	font-weight: 600;
	font-size: 32rpx;
}

.header .history-title .clear {
	color: #9A9A9A;
}


.popular {
	background-color: #FFFFFF;
	margin: 0rpx;
	margin-top: 15rpx;
	margin-bottom: 50rpx;
}

.popular .title {
	display: flex;
	margin: 0rpx 30rpx;
	box-sizing: border-box;
	padding-top: 35rpx;
}

.popular .list .item {
	display: flex;
	margin: 0rpx 30rpx;
	box-sizing: border-box;
	padding: 35rpx 0px;
	border-bottom: 1px solid #F6F6F6;
}

.popular .list .item .index {
	color: #908F95;
}

.popular .list .item .color0 {
	color: #CB5B54;
}

.popular .list .item .color1 {
	color: #E58439;
}

.popular .list .item .color2 {
	color: #D3BA89;
}

.popular .list .item .content {
	flex: 1;
	margin-left: 25rpx;
}

.popular .list .item .space {
	flex: 1;
}
</style>
