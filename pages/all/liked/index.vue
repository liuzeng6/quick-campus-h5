<template>
    <scroll-view :scroll-y="true" id="page">
        <view class="items">
            <view class="item" v-for="(el, index) in list" @click="toTopic(el.uid)">
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
                                {{ el.createtime }}
                            </view>
                            <view class="space">·</view>
                            <view class="msg">
                                点赞了你的帖子
                            </view>
                        </view>
                    </view>
                </view>
                <view class="below">
                    <view class="sign">原帖</view>
                    <view class="content">
                        {{ el.title }}
                    </view>
                </view>
            </view>
        </view>
        <view class="end">我已经到底了(￣▽￣)</view>
    </scroll-view>
</template>
<script setup>
const toTopic = (uid) => {
    uni.navigateTo({
        url: `/pages/details/index?id=${uid}`
    });
}
let list = [
    {
        "id": 2,
        "uid": 2,
        "cid": 0,
        "tid": 2,
        "createtime": 24346,
        "read": 0,
        "title": "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
        "user": {
            "id": 2,
            "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/peach.png",
            "nickname": "用户二"
        }
    }
]
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
            }

            .below {
                display: flex;
                height: 70rpx;
                line-height: 70rpx;
                background-color: #F3F3F3;
                align-items: center;

                .sign {
                    width: 74rpx;
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