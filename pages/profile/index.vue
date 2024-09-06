<template>
    <view id="page">
        <view class="items">
            <view class="item" @click="changeAvatar">
                <view class="text">头像</view>
                <view class="avatar">
                    <image src="http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png"></image>
                </view>
                <view class="arrow">
                    <uni-icons type="right" size="30rpx" color="#909090"></uni-icons>
                </view>
            </view>
            <view class="item" @click="changeAvatar">
                <view class="text">昵称</view>
                <view class="nickname">
                    <input type="text" value="小猫老弟">
                </view>
                <view class="arrow">
                    <uni-icons type="right" size="30rpx" color="#909090"></uni-icons>
                </view>
            </view>
        </view>
        <button class="save" @click="save" :dis="disabled">
            保存
        </button>
    </view>
</template>
<script setup>
import { ref } from "vue";
let disabled = ref(false);
const save = () => {
    console.log("保存");
}
const changeAvatar = () => {

}

const changeNickname = () => {

}

</script>
<style scoped>
#page {
    background-color: #F2F5FA;
}

.items {
    margin-top: 15rpx;
    background-color: #FFFFFF;
}

.items .item {
    height: 120rpx;
    border-bottom: 1px solid #F0F0F0;
    margin: 0rpx 25rpx;
    line-height: 120rpx;
    display: flex;
}

.items .item .text {
    flex: 1;
    font-weight: 600;
}

.items .item .nickname input {
    color: #909090;
    text-align: right;
    height: 120rpx;
    line-height: 120rpx;
}

.items .item .arrow {
    margin-left: 10rpx;
}

.items .item .avatar {
    margin-top: 20rpx;
    width: 80rpx;
    height: 80rpx;
}

.items .item .avatar image {
    width: 100%;
    height: 100%;
}


.save {
    margin-top: 160rpx;
    width: 430rpx;
    height: 110rpx;
    font-size: 40rpx;
    line-height: 110rpx;
    border-radius: 50rpx;
}



.save[dis='false'] {
    background-color: #C8C8C8;
    color: #4B4B4D;
}

.save[dis='true'] {
    color: #F3F3F3;
    background-color: #333333;
}
</style>