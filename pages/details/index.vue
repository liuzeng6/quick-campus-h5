<template>
    <scroll-view :scroll-y="true">
        <view id="page">
            <view class="content">
                <view class="flex">
                    <view class="left">
                        <div class="avatar">
                            <image :src="topicsData.data.user.avatar"></image>
                        </div>
                    </view>
                    <view class="right">
                        <view class="header">
                            <view>
                                <view class="nickname">{{ topicsData.data.user.nickname }}</view>
                                <view class="time">{{ topicsData.data.createtime }}</view>
                            </view>
                            <view class="space"></view>
                            <view>
                                <button class="like">
                                    <uni-icons type="hand-up" size="40rpx" color="#919191"></uni-icons>
                                    {{ topicsData.data.like_number }}
                                </button>
                            </view>
                        </view>
                        <view class="body">
                            <view>{{ topicsData.data.title }} {{ topicsData.data.content }}</view>
                        </view>
                        <view class="images">
                            <view class="item" v-for="item in topicsData.data.images">
                                {{ item }}
                            </view>
                        </view>

                        <view class="below">
                            <view class="tag">#{{ topicsData.data.tag_id }}</view>
                            <view class="space"></view>
                            <view class="btn-group">
                                <view @click="share">
                                    <uni-icons type="undo" color="#999999" size="30rpx"></uni-icons>
                                    分享
                                </view>
                                <view @click="report">
                                    <uni-icons type="calendar" color="#999999" size="30rpx"></uni-icons>
                                    举报
                                </view>
                                <view @click="collect">
                                    <uni-icons type="star" color="#999999" size="30rpx"></uni-icons> 收藏
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="spread">
                <swiper circular indicator-dots>
                    <swiper-item v-for="item in swipers">
                        <image :src="item" style="width: 750rpx;height: 250rpx;"></image>
                    </swiper-item>
                </swiper>
            </view>
            <view class="review">
                <view class="header">
                    <view class="title">评论（{{ topicsData.data.comment_number }}）</view>
                    <view class="space"></view>
                    <Sort :mode="mode" @change="change"></Sort>
                </view>
                <CommentList :cList="cList"></CommentList>
                <view class="below">
                    <!-- <view class="nomore">
                        没有更多评论了~
                    </view> -->
                    <view class="copy">
                        一键校园@2024
                    </view>
                </view>
            </view>
        </view>
    </scroll-view>

    <view class="comment">
        <view class="avatar">
            <image :src="topicsData.data.user.avatar"></image>
        </view>
        <view class="input" @click="open">
            <view>评论千万条，友善第一条...</view>
        </view>
    </view>
    <up-popup :closeOnClickOverlay="true" :show="show" mode="center" @close="close" class="modal">
        <view class="header">
            发表评论
        </view>
        <view class="body">
            <view class="box">
                <textarea id="t1" v-model="content" placeholder="发表你的看法"></textarea>
            </view>
        </view>
        <view class="action">
            <button @click="issue" class="issue"><uni-icons type="checkmarkempty" size="26rpx" color="#fff"></uni-icons>
                发表</button>
        </view>
    </up-popup>
    <view class="sidebar">
        <view>
            <uni-icons type="compose" size="34rpx" color="#fff"></uni-icons>
            <view>发布</view>
        </view>
        <view>
            <uni-icons type="chatboxes" size="34rpx" color="#fff"></uni-icons>
            <view>消息</view>
        </view>
        <view>
            <uni-icons type="home" size="34rpx" color="#fff"></uni-icons>
            <view>首页</view>
        </view>
    </view>
</template>
<script setup>

import Sort from "./Sort.vue";
import { timeAgo } from '../../utlis/time';
import { reactive, ref } from 'vue';
import CommentList from "./CommentList.vue"


let mode = ref(1);

let swipers = reactive([
    '../../static/images/banner.png',
]);

let content = ref("");
// 评论内容

const topicsData = reactive({
    data: {

    }
});

const show = ref(false);


const cList = reactive([]);

let id = 1;
topicsData.data = {
    "id": 1,
    "uid": 1,
    "title": "香山的猫猫太可爱了",
    "createtime": 1723746227,
    "content": "就在香山的猫咖，大家快来摸香山的猫猫***价格也特别亲民只要26.8老板也特别好，这几天开业，老板说前二十可以给猫猫取名字",
    "images": [],
    "is_block": false,
    "like_number": 1,
    "views": 0,
    "tag_id": "分享生活",
    "comment_number": 1,
    "eid": 0,
    "user": {
        "id": 1,
        "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
        "nickname": "用户一",
        "is_block": false
    }
};
topicsData.data.createtime = timeAgo(topicsData.data.createtime * 1000)

cList.push(...[
    {
        "id": 5,
        "tid": 1,
        "uid": 1,
        "read": 1,
        "content": "就是哈，这种搬个凳子还拖的人疑似绝美伪人哈，这么晚了还不知道小心一点 ，意义不明哈",
        "createtime": 232424,
        "like_number": 0,
        "is_block": false,
        "rid": 0,
        "user": {
            "id": 1,
            "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
            "nickname": "用户一",
            "is_block": false
        },
        "replies": [
            {
                "id": 6,
                "user": {
                    "id": 1,
                    "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
                    "nickname": "用户一"
                },
                "content": "波子牛逼",
                "createtime": 1723973295,
                "like_number": 0
            },
            {
                "id": 4,
                "user": {
                    "id": 2,
                    "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/peach.png",
                    "nickname": "用户二"
                },
                "content": "小丑降临",
                "createtime": 1723811114,
                "like_number": 0
            }
        ],
        "reply_number": 2
    }, {
        "id": 5,
        "tid": 1,
        "uid": 1,
        "read": 1,
        "content": "是让人感到给对方",
        "createtime": 232424,
        "like_number": 0,
        "is_block": false,
        "rid": 0,
        "user": {
            "id": 1,
            "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
            "nickname": "用户一",
            "is_block": false
        },
        "replies": [
            {
                "id": 6,
                "user": {
                    "id": 1,
                    "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
                    "nickname": "用户一"
                },
                "content": "就是哈，这种搬个凳子还拖的人疑似绝美伪人哈，这么晚了还不知道小心一点",
                "createtime": 1723973295,
                "like_number": 0
            },
            {
                "id": 4,
                "user": {
                    "id": 2,
                    "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/peach.png",
                    "nickname": "用户二"
                },
                "content": "小丑降临",
                "createtime": 1723811114,
                "like_number": 0
            }
        ],
        "reply_number": 2
    }
])


// let { data } = await request.get(`/community/topics/${id}`);
// let res = await request.get(`/community/topics/comments/${id}`);
// console.log(res.data.data, data.data);

const open = () => {
    show.value = true;
}
const close = () => {
    show.value = false;
}
const share = () => {
    // 触发分享
    console.log("触发分享");
};
const collect = () => {
    // 触发收藏
    console.log("触发收藏");
};

const report = () => {
    // 触发巨擘
    console.log("触发举报");
}
const issue = () => {
    // 发布评论
    show.value = false;
}
const change = (_mode) => {
    // 更改帖子排序方式
    mode.value = _mode;
}

</script>
<style scoped>
@import "./index.css";
</style>