<template>
    <view id="page">
        <view class="items">
            <button open-type="chooseAvatar" :plain="true" style="border: none;box-sizing: border-box;" class="item"
                @click="clickAvatar" @chooseavatar="changeAvatar">
                <view class="text" style="text-align: left;">头像</view>
                <view class="avatar">
                    <image :src="userInfo.avatar"></image>
                </view>
                <view class="arrow">
                    <uni-icons type="right" size="30rpx" color="#909090"></uni-icons>
                </view>
            </button>
            <view class="item" style="margin:0rpx 25rpx;">
                <view class="text">昵称</view>
                <view class="nickname">
                    <input type="nickname" maxlength="16" v-model="userInfo.nickname" @click="changeNickname">
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
import { ref, toRaw } from "vue";
import { useUserStore } from "../../stores";
import request from '@/utlis/request.js'
const userInfo = ref({ ...(useUserStore().userInfo.value) });



let disabled = ref(false);
const save = async () => {
    if (disabled.value) {
        let { avatar, nickname } = userInfo.value;
        let form = { avatar, nickname };
        if ("" == nickname) {
            uni.showToast({
                title: "昵称不能为空",
                icon: "none"
            });
            return false;
        }
        if (nickname.length > 16) {
            uni.showToast({
                title: "昵称不能超过16个字",
                icon: "none"
            });
            return false;
        }

        let { data } = await request.put("/user/profile", form);
        if (data.code == 1) {
            uni.showToast({
                title: "修改成功",
                icon: "none"
            });
            let userInfo = (useUserStore()).userInfo.value;
            userInfo.nickname = nickname;
            userInfo.avatar = avatar;
        } else {
            uni.showToast({
                title: "修改失败",
                icon: "none"
            });
        }
        console.log(form);

    } else {
        return false
    }

}
const clickAvatar = () => {
    uni.showToast({
        title: "暂时不支持修改头像",
        icon: "none"
    })
}
const changeNickname = async (ev) => {
    disabled.value = true;
}
const changeAvatar = async (ev) => {
    disabled.value = true;
    uni.showToast({
        title: '暂时不支持修改头像',
        icon: "none",
        duration: 2000
    });
    // userInfo.value.avatar = ev.detail.avatarUrl
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
    line-height: 120rpx;
    display: flex;
}

.items .item .text {
    text-align: left;
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