<template>
    <view class="list" v-if="props.cList.length">
        <view class="item" v-for="(item, index) in props.cList" v-show="item.id">
            <view class="left" @click="handleCLick()">
                <image :src="item.user.avatar"></image>
            </view>
            <view class="right">
                <view class="nickname">
                    <view>
                        {{ item.user.nickname }}
                    </view>
                    <view class="sign" v-show="item.uid == uid">
                        楼主
                    </view>
                </view>
                <view @click.stop="reply({ 'comment_id': item.id, ruid: 0 }, item.uid == uid)">
                    <view class="text">
                        {{ item.content }}
                    </view>
                    <view class="flex">
                        <view class="l">
                            <view class="time">
                                {{ timeAgo(item.createtime * 1000) }}
                            </view>
                            <view class="reply">
                                回复
                            </view>
                        </view>
                        <view class="space"></view>
                        <view class="r" @click.stop="like()">
                            <uni-icons type="hand-up" size="40rpx" color="#919191"></uni-icons>
                            <view class="num" v-show="like_number">{{ item.like_number }}</view>
                        </view>
                    </view>
                </view>
                <view class="item replies" v-for="el in item.replies">
                    <view class="left" @click="handleCLick()" style="margin-left: 5rpx;">
                        <image :src="el.user.avatar"></image>
                    </view>
                    <view class="right">
                        <view class="nickname">
                            <view>
                              {{ el.user.nickname }} <text v-show="el.ruser"> > {{ el.ruser }}</text> 
                            </view>
                            <view class="sign" v-show="uid == el.user.id">
                                楼主
                            </view>
                        </view>
                        <view @click.stop="reply({ 'comment_id': item.id, ruid: el.user.id }, el.user.id == uid)">
                            <view class="text">
                                {{ el.content }}
                            </view>
                            <view class="flex">
                                <view class="l">
                                    <view class="time">
                                        {{ timeAgo(el.createtime * 1000) }}
                                    </view>
                                    <view class="reply">
                                        回复
                                    </view>
                                </view>
                                <view class="space"></view>
                                <view class="r" @click.stop="like()">
                                    <uni-icons type="hand-up" size="40rpx" color="#919191"></uni-icons>
                                    <view class="num" v-show="el.like_number">{{ el.like_number }}</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view v-else style="text-align: center;font-size: 24rpx;color: #BEBEBE;margin-top: 100rpx;">
        暂无评论快来抢占沙发🛋
    </view>
</template>
<script setup>

import { useUserStore } from '../../stores';
// import appData from '../../stores/appData';
import { useAppDataStore } from "@/stores";
const appData = useAppDataStore().config
import { timeAgo } from '../../utlis/time';
import { ref, onMounted } from "vue";
const props = defineProps({
    "cList": Array,
    "uid": Number
});
const emits = defineEmits(['open']);

const handleCLick = () => {
    console.log("a");
}
const like = () => {
    uni.showToast({
        icon: "none",
        title: '暂时不支持该操作',
        duration: 2000
    });
}
const reply = (opt, flag) => {
    if (flag) {
        uni.showToast({
            icon: "none",
            title: '你不能回复自己的评论',
            duration: 2000
        });
    } else {
        emits("open", opt);
    }
}
</script>
<style scoped>
.replies {
    background-color: #FFFFFF;
    border-radius: 10rpx;
}

.item {
    font-size: 26rpx;
    box-sizing: border-box;
    padding: 15rpx 0rpx;
    line-height: 44rpx;
    box-sizing: border-box;
    display: flex
}

.item .left {
    width: 64rpx;
    height: 64rpx;
    margin-right: 10rpx;
}

.item .left image {
    width: 100%;
    height: 100%;
}

.item .right {
    flex: 1;
}

.item .right .nickname {
    color: #B0B0B0;
    display: flex;
    font-size: 24rpx;
}

.item .right .nickname .sign {
    background-color: #007AFF;
    color: #FFFFFF;
    font-size: 18rpx;
    line-height: 30rpx;
    text-align: center;
    border-radius: 5rpx;
    width: 50rpx;
    margin-top: 8rpx;
    margin-left: 10rpx;
    height: 30rpx;
}


.item .right .flex {
    display: flex;
}

.item .right .flex .l,
.item .right .flex .r {
    display: flex;
}

.item .right .flex .l {
    color: #B0B0B0;
    font-size: 24rpx;
}

.item .right .flex .l .time {
    margin-right: 20rpx;
}

.item .right .space {
    flex: 1;
}

.item .right .flex .r {
    margin-right: 20rpx;
}

.item .right .flex .r .num {
    color: #8A8A8A;
}
</style>