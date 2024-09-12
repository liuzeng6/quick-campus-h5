<template>
	<view class="box">
		<up-steps :current="current">
			<up-steps-item title="选择身份"></up-steps-item>
			<up-steps-item title="完善资料"></up-steps-item>
			<up-steps-item title="认证完成"></up-steps-item>
		</up-steps>
		<view class="content">
			<button @click="current = 0">1</button>
			<button @click="current = 1">2</button>
			<button @click="current = 2">3</button>
		</view>
	</view>
</template>
<script setup>
import { ref } from 'vue';

const current = ref(0);
</script>
<style scoped lang="scss">
.box {
	margin: 20rpx;
	padding: 20rpx;
	background-color: #ffffff;
	height: 100%;
}
</style>
