<template>
    <view class="box">
        <view :class="mode == 1 ? 'active' : ''" @click="handleClick(1)">
            热度
        </view>
        <view :class="mode == 2 ? 'active' : ''" @click="handleClick(2)">
            时间
        </view>
    </view>
</template>
<script setup>
const porps = defineProps({
    mode: Number,
});

const emits = defineEmits({
    change: Function
});

function handleClick(mode) {
    if (mode != porps.mode) {
        console.log(mode);
        emits("change", mode);
    }
}

</script>
<style scoped>
.box {
    display: flex;
    width: 180rpx;
    height: 50rpx;
    background-color: #EFEFEF;
    border-radius: 10rpx;
    text-align: center;
    line-height: 50rpx;
}

.box view {
    flex: 1;
    font-size: 24rpx;
    text-align: center;
}

.box view.active {
    background-color: #FEFEFE;
    color: #1364D6;
    font-weight: 600;
    padding: 2rpx;
    border-radius: 5rpx;
}
</style>
