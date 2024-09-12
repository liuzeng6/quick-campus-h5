<template>
	<navbar :isHome='true' @getStatusHeight='getStatusHeight'></navbar>
	<tabbar checkedIndex='0'></tabbar>
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
				<swiper class="swiper" :indicator-dots='false' autoplay :interval='5000' circular :vertical='true'
					:duration='800'>
					<swiper-item v-for="item in hotTopicList" :key="item.id">
						<view class="swiper-item">
							<view :class="item.id <= 3 ? 'top3 no' : 'no'">{{ item.id }}</view>
							<view class="hot-title">{{ item.title }}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="card">
			<view class="card-title">
				<view :class="!tagId ? 'color-active' : ''" @click="getTopiceAllByTag">全部</view>
				<view v-for="item in tags" :key="item.id" :class="tagId === item.id ? 'color-active' : ''"
					@click="getTopiceByTag(item.id)">
					{{ item.tag }}
				</view>
			</view>
			<view class="card-content">
				<view class="card-item" v-for="item in topicList" :key="item.id">
					<view class="tx">
						<image :src="item.user.avatar" mode=""></image>
					</view>
					<view class="info">
						<view class="name">{{ item.user.nickname }}</view>
						<view class="time">刚刚</view>
						<view class="content">
							{{ item.content }}
						</view>
						<view class="foot">
							<view class="tag">
								<text>{{ item.tag }}</text>
							</view>
							<view class="msg">
								<image src="/static/images/msg.png" mode="widthFix"></image>
								<text> {{ item.comment_number }} </text>
							</view>
							<view class="zan">
								<image src="/static/images/zan.png" mode="widthFix"></image>
								<text>{{ item.like_number }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { nextTick, onMounted, ref, reactive } from 'vue'
import tabbar from '@/components/tabbar/tabbar.vue'
import { getTopics, getTags, getTopiceAll } from '../../api/index.js'

let barHeight = ref(0)
let tagId = ref('')
// 热榜
let hotTopicList = ref([])
// 标签
let tags = ref([])
// 帖子
let topicList = ref([])
// 页码
let pageInfo = reactive({
	page: 1,
	pageSize: 10
})

onMounted(() => {
	getHotTopics()
	getTagAll()
	getTopice(pageInfo, tagId.value)
})

// 获取navbar高度
const getStatusHeight = navBarHeight => {
	barHeight.value = navBarHeight
}
// 获取热榜
const getHotTopics = async () => {
	let res = await getTopics()
	hotTopicList.value = res.data.data
}
// 获取标签
const getTagAll = async () => {
	let res = await getTags()
	tags.value = res.data.data
}
// 点击全部标签
const getTopiceAllByTag = () => {
	tagId.value = ''
	getTopice(pageInfo, tagId.value)
}
// 通过标签获取帖子
const getTopiceByTag = id => {
	tagId.value = id
	getTopice(pageInfo, tagId.value)
}
// 获取所有帖子
const getTopice = async (pageInfo, tagId) => {
	let res = await getTopiceAll(pageInfo, tagId)
	topicList.value = res.data.data
}
</script>

<style scoped>
@import './index.css';
</style>
