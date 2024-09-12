<template>
    <scroll-view :scroll-y="true" id="page">
        <view class="items">
            <view class="item" v-for="(el, index) in list" @click="toTopic(el.tid)">
                <view class="above">
                    <view class="avatar">
                        <image :src="el.user.avatar"></image>
                    </view>
                    <view class="content">
                        <view class="nickname">
                            {{ el.user.nickname }}
                        </view>
                        <view class="flex">
                            <view class="time">
                                {{ toDate(el.createtime * 1000) }}
                            </view>
                            <view class="space">·</view>
                            <view class="msg">
                                评论了你的帖子/评论
                            </view>
                        </view>
                    </view>
                    <view class="reply" @click.stop="reply(el.uid)">
                        ✍回复
                    </view>
                </view>
                <view class="center">
                    {{ el.content }}
                </view>
                <view class="below">
                    <view class="sign">原帖</view>
                    <view class="content">
                        {{ el.source_review }}
                    </view>
                </view>
            </view>
        </view>
        <view class="end">我已经到底了(￣▽￣)</view>
    </scroll-view>
</template>
<script setup>
import { ref, onMounted } from "vue";
import request from "@/utlis/request";
import { toDate } from "../../../utlis/time";
let list = ref([]);
onMounted(async () => {
    let { data: { data } } = await request("/community/my/replieds");
    list.value = data;
})
const toTopic = (tid) => {
    uni.navigateTo({
        url: `/pages/details/index?id=${tid}`
    });
}

const reply = (uid) => {
    // toTopic(uid);
    uni.showToast({
        icon: "none",
        title: '暂不支持',
        duration: 2000
    });
}
</script>
<style scoped lang="scss">
#page {
    background-color: #F6F6F6;
    min-height: calc(100vh - 85rpx);

    .items {
        box-sizing: border-box;
        padding: 15rpx;
        margin-bottom: 20rpx;

        .item {
            margin-bottom: 20rpx;
            box-sizing: border-box;
            border-radius: 15rpx;
            padding: 20rpx;
            padding-top: 30rpx;
            background-color: #FFFFFF;

            .above {
                display: flex;
                margin-bottom: 20rpx;

                .avatar {
                    width: 60rpx;
                    height: 60rpx;

                    image {
                        width: 100%;
                        height: 100%;
                    }
                }

                .content {
                    flex: 1;

                    .nickname {
                        color: #586082;
                        font-size: 28rpx;
                    }

                    margin-left: 15rpx;

                    .flex {
                        .space {
                            margin: 0rpx 10rpx;
                        }

                        display: flex;
                        font-size: 22rpx;
                        color: #A0A1A3;
                    }
                }

                .reply {
                    width: 120rpx;
                    height: 50rpx;
                    border-radius: 25rpx;
                    text-align: center;
                    line-height: 50rpx;
                    font-size: 26rpx;
                    border: 1px solid #edecec;
                }
            }

            .center {
                margin-bottom: 20rpx;
                font-size: 28rpx;
            }

            .below {
                display: flex;
                height: 70rpx;
                line-height: 70rpx;
                background-color: #F3F3F3;
                align-items: center;

                .sign {
                    // width: 74rpx;
                    box-sizing: border-box;
                    padding: 0rpx 15rpx;
                    height: 40rpx;
                    background-color: #0061FD;
                    border-radius: 5rpx;
                    color: #fff;
                    line-height: 40rpx;
                    text-align: center;
                    font-size: 22rpx;
                    margin: 0rpx 20rpx;
                }

                .content {
                    color: #959595;
                    overflow: hidden;
                    flex: 1;
                    text-overflow: ellipsis;
                    font-size: 24rpx;
                    white-space: nowrap;
                }
            }
        }
    }

    .end {
        text-align: center;
        margin-top: 40rpx;
        font-size: 28rpx;
        color: #B4B4B4;
        margin-bottom: 200rpx;
    }
}
</style>