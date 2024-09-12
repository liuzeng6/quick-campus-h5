<template>
	<view class="box">
		<up-cell-group>
			<up-cell v-for="el in list" :icon="el.icon" :title="el.title" :isLink="true"></up-cell>
		</up-cell-group>
	</view>
</template>
<script setup>
import { ref } from 'vue';

const list = ref([
	{
		title: '设置1',
		icon: 'setting-fill'
	},
	{
		title: '设置2',
		icon: 'integral-fill'
	},
	{
		title: '设置3',
		icon: 'integral-fill'
	}
]);
</script>
<style scoped lang="scss">
.box {
	background-color: #fff;
}
</style>
