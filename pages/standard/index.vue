<template>
	<view class="top-subsection">
		<up-subsection :list="list" :current="curNow" @change="change" activeColor="black" inactiveColor="black"></up-subsection>
	</view>
	<view class="content">
		<up-empty v-show="curNow == 0" mode="data" text="社区规范还在建设中..." icon="http://cdn.uviewui.com/uview/empty/data.png"></up-empty>
		<up-empty v-show="curNow == 1" mode="data" text="小黑屋还在建设中..." icon="http://cdn.uviewui.com/uview/empty/data.png"></up-empty>
	</view>
	<view class="product">
		<view class="version">v1.0.0</view>
		<view class="name">一键校园@2024</view>
	</view>
</template>
<script setup>
import { ref } from 'vue';

const list = ref(['社区规范', '小黑屋']);
const curNow = ref(0);
function change(index) {
	curNow.value = index;
}
</script>
<style scoped lang="scss">
.top-subsection {
	padding: 20rpx 80rpx;
	background-color: #fff;
	height: 80rpx;
	display: flex;
	align-items: center;
}
.content {
	background-color: #fff;
	margin: 20rpx;
	min-height: 80vh;
}
.product {
	text-align: center;
	color: #c3c2c8;
	line-height: 60rpx;
	font-size: 26rpx;

	.version {
		margin-top: 60rpx;
	}
}
</style>
