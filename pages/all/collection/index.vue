<template>
    <scroll-view :scroll-y="true" id="page">
        <view class="items">
            <view class="item" v-for="(el, index) in list" @click="toTopic(el.id)">
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
                        </view>
                    </view>
                    <view class="cancel" @click.stop="cancel(el.id)">
                        <uni-icons type="star" size="26rpx" color="#D8A47A"></uni-icons>取消收藏
                    </view>
                </view>
                <view class="box">
                    <view class="center">
                        <view class="title">{{ el.title }}</view>
                        <view class="content">{{ el.content }}</view>
                    </view>
                    <view class="below">
                        <view class="sign"># {{ tags.find(item => item.id == el.tag_id)?.tag }}</view>
                        <view class="space"></view>
                        <view class="group">
                            <view><uni-icons type="chat" color="#878787" size="34rpx"></uni-icons></view>
                            <view style="margin-left: 44rpx;"> <uni-icons type="hand-up" size="34rpx"
                                    color="#878787"></uni-icons> </view>
                        </view>
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
// import appData from "../../../stores/appData";
import { useAppDataStore } from "@/stores";
const appData = useAppDataStore().config
import { toDate } from "../../../utlis/time";
let list = ref([]);
let tags = appData.tags;
const loadData = async () => {
    let { data: { data } } = await request("/community/my/collect/topics");
    list.value = data;
}
onMounted(async () => {
    loadData();
})
const toTopic = (tid) => {
    uni.navigateTo({
        url: `/pages/details/index?id=${tid}`
    });
}

const cancel = async (tid) => {
    let res = await uni.showModal({
        title: '提示',
        content: '是否要取消收藏',
    });
    if (res.confirm) {
        let { data } = await request.delete(`/community/my/collect/topics/${tid}`);
        if (data?.code == 1) {
            uni.showToast({
                title: data.data,
                duration: 2000
            });
            await loadData()
        } else {
            uni.showToast({
                icon: "none",
                title: data.msg,
                duration: 2000
            });
        }
    }

}
</script>
<style scoped lang="scss">
#page {
    background-color: #F6F6F6;
    min-height: calc(100vh - 85rpx);

    .items {
        box-sizing: border-box;
        padding: 15rpx;

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
                        color: #2F2F2F;
                        font-size: 26rpx;
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

                .cancel {
                    box-sizing: border-box;
                    padding: 0rpx 15rpx;
                    height: 50rpx;
                    border-radius: 8rpx;
                    text-align: center;
                    line-height: 50rpx;
                    color: #999999;
                    font-size: 24rpx;
                    border: 1px solid #edecec;
                }
            }

            .box {
                box-sizing: border-box;
                padding-left: 70rpx;

                .center {
                    // margin-bottom: 20rpx;
                    font-size: 28rpx;
                    line-height: 44rpx;

                    .title {}

                    .content {}
                }

                .below {
                    display: flex;
                    height: 70rpx;
                    line-height: 70rpx;
                    align-items: center;

                    .sign {
                        box-sizing: border-box;
                        padding: 0rpx 15rpx;
                        height: 45rpx;
                        background-color: #F3F3F3;
                        border-radius: 10rpx;
                        color: #979797;
                        line-height: 45rpx;
                        text-align: center;
                        font-size: 22rpx;
                        // margin: 0rpx 20rpx;
                    }

                    .space {
                        flex: 1;
                    }

                    .group {
                        color: #959595;
                        overflow: hidden;
                        display: flex;
                        text-overflow: ellipsis;
                        font-size: 24rpx;
                        white-space: nowrap;
                    }
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