<template>
    <view>
        浏览器访问地址
    </view>
    <view style="font-size: 24rpx;">
        <text selectable>{{ `https://cymmc.top/?openid=${openid}` }}</text>
    </view>
</template>
<script setup>
import appData from '../../stores/appData';

let openid = appData.openid
</script>
<style scoped lang="scss"></style>