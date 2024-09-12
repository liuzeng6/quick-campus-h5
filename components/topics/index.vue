<template>
    <view class="items">
        <view class="item" v-for="(el, index) in props.topicList" @click="toDetail(el.id)">
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
                            {{ timeAgo(el.createtime * 1000) }}
                        </view>
                        <!-- <view class="space">·</view> -->
                        <!-- <view class="right">{{  }}次围观</view> -->
                    </view>
                </view>
            </view>
            <view class="box">
                <view class="center">
                    <!-- <view class="title">{{ el.title }}</view> -->
                    <view class="content">{{ el.title }} {{ el.content }}</view>
                </view>
                <PictureList :images="el.images" />
                <view class="below">
                    <view class="sign"># {{ tags.find(item => item.id == el.tag_id)?.tag }}</view>
                    <view class="space"></view>
                    <view class="group">
                        <view><uni-icons type="chat" color="#878787" size="34rpx"></uni-icons> {{ el.comment_number
                            }} </view>
                        <view style="margin-left: 44rpx;"> <uni-icons type="hand-up" size="34rpx"
                                color="#878787"></uni-icons>{{ el.like_number }}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup>
import { timeAgo } from "../../utlis/time"
import { ref, onMounted } from 'vue';
import PictureList from "../../components/pictureList";
import appData from "../../stores/appData";
const props = defineProps({
    topicList: {
        type: Array,
        required: true
    }
});
const tags = ref([]);
onMounted(async () => {
    tags.value = appData.tags;
});
const toDetail = (tid) => {
    uni.navigateTo({
        url: `/pages/details/index?id=${tid}`
    })
};

</script>
<style scoped lang="scss">
.items {
    margin-bottom: 200rpx;
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
                    margin-bottom: 3rpx;
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

        }

        .box {
            box-sizing: border-box;
            padding-left: 70rpx;

            .center {
                font-size: 28rpx;
                line-height: 44rpx;

                // .title {}

                // .content {}
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
</style>