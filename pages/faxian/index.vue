<template>
	<scroll-view :scroll-y="true">
		<view id="page">
			<view class="header">
				<view class="search">
					<up-icon name="search" size="40rpx" class="search-icon"></up-icon>
					<input @input="search()" type="text" placeholder="搜索帖子和文章" v-model="q" class="input">
					<uni-icons v-if="q" type="close" size="44rpx" class="close" color="rgb(147, 146, 153)"
						@click="close()"></uni-icons>
				</view>
				<view class="history-title">
					<view class="boldface">
						搜索历史
					</view>
					<view class="space">

					</view>
					<view class="clear" @click="clear()">
						<up-icon name="trash" size="38rpx"></up-icon>
						<view> 清空</view>
					</view>
				</view>
				<view v-if="!searchHistory.length" class="blank">
					暂无搜索记录
				</view>
				<view v-else class="search-history">
					<view class="item" v-for="(item, index) in searchHistory" :key="item">
						<view>{{ item }}</view>
						<uni-icons type="closeempty" size="34rpx" color="#929292" style="margin: 0rpx 5rpx;"
							@click="clear(item)"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="popular">
			<view class="title">
				<uni-icons type="fire-filled" size="36rpx" color="#FF2545"></uni-icons>
				<view style="font-style: italic;font-size: 34rpx;font-weight: 600;margin: 0rpx 16rpx 0rpx 12rpx">热门帖子
				</view>
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
function debounce(func, wait) {
	let timeout;

	return function () {
		let context = this; // 保存this指向
		let args = arguments; // 拿到event对象

		clearTimeout(timeout)
		timeout = setTimeout(function () {
			func.apply(context, args)
		}, wait);
	}
}

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

let searchHistory = reactive(["真的累", "真的累毁了", "真的累", "真的累毁了", "真的累", "真的累毁了真的累毁了真的累毁了真的累毁了真的累毁了", "真的"]);
function handleCLick(id) {
	console.log(id);
}
function clear(val) {
	if (val) {
		let index = searchHistory.findIndex(el => el == val);
		if (index != -1) {
			searchHistory.splice(index, 1);
		}
	} else {
		uni.showModal({
			title: '提示',
			content: '是否要清空搜索记录？',
			success: function (res) {
				if (res.confirm) {
					console.log('用户点击确定');
				}
			}
		});
	}
};
// function search() {
// 	console.log('a');
// 	console.log(q);
// }
let search = debounce(() => {
	console.log(q);
}, 500)
let q = ref("");
</script>

<style scoped>
@import url("./index.css");
</style>
