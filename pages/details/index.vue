<template>
    <scroll-view :scroll-y="true">
        <view id="page">
            <view class="content">
                <view class="flex">
                    <view class="left">
                        <div class="avatar">
                            <image :src="topicsData.user.avatar"></image>
                        </div>
                    </view>
                    <view class="right">
                        <view class="header">
                            <view>
                                <view class="nickname">{{ topicsData.user.nickname }}</view>
                                <view class="time">{{ timeAgo(topicsData.createtime * 1000) }}</view>
                            </view>
                            <view class="space"></view>
                            <view>
                                <button :class="topicsData.is_like ? 'like active' : 'like'"
                                    @click="like(topicsData.is_like)">
                                    <uni-icons type="hand-up" size="40rpx" color="#919191"></uni-icons>
                                    <text v-show="topicsData.like_number">{{ topicsData.like_number }}</text>
                                </button>
                            </view>
                        </view>
                        <view class="body">
                            <view>{{ topicsData.title }} {{ topicsData.content }}</view>
                        </view>
                        <!-- <view class="images">
                            <view class="item" v-for="item in topicsData.images" @click="preview(loadImage(item))">
                                <image :src="loadImage(item)" mode="aspectFill"></image>
                            </view>
                        </view> -->
                        <PictureList :images="images" />

                        <view class="below">
                            <view class="tag"># {{ appData.tags.find(item => item.id == topicsData.tag_id)?.tag }}
                            </view>
                            <view class="space"></view>
                            <view class="btn-group">
                                <botton open-type="share" @click="share" class="share">
                                    <uni-icons type="undo" color="#999999" size="30rpx"></uni-icons>
                                    分享
                                </botton>
                                <view @click="report">
                                    <uni-icons type="calendar" color="#999999" size="30rpx"></uni-icons>
                                    举报
                                </view>
                                <view @click="collect(topicsData.is_collect)"
                                    :class="topicsData.is_collect ? 'collect active' : 'collect'">
                                    <uni-icons type="star" color="#999999" size="30rpx"></uni-icons> {{
                                        topicsData.is_collect ? '取消' : '收藏' }}
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="spread">
                <swiper circular indicator-dots>
                    <swiper-item v-for="item in spread" @click="skip(item.url)">
                        <image :src="item.image" style="width: 750rpx;height: 250rpx;"></image>
                    </swiper-item>
                </swiper>
            </view>
            <view class="review">
                <view class="header">
                    <view class="title">评论（{{ topicsData.comment_number }}）</view>
                    <view class="space"></view>
                    <Sort :mode="mode" @change="change"></Sort>
                </view>
                <CommentList @open="open" :cList="cList" :tid="topicsData.id"></CommentList>
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
            <image :src="topicsData.user.avatar"></image>
        </view>
        <view class="input" @click="open({ ruid: 0 })">
            <view>评论千万条，友善第一条...</view>
        </view>
    </view>
    <up-popup :closeOnClickOverlay="true" :show="show" mode="center" @close="close" class="modal">
        <view style="color: red;">{{ error }}</view>
        <view class="header">
            发表评论
        </view>
        <view class="body">
            <view class="box">
                <textarea id="t1" v-model="content" placeholder="发表你的看法"></textarea>
            </view>
        </view>
        <view class="action">
            <button @click="reply" class="issue"><uni-icons type="checkmarkempty" size="26rpx" color="#fff"></uni-icons>
                发表</button>
        </view>
    </up-popup>
    <view class="sidebar">
        <view @click="navigator('/pages/release/index')">
            <uni-icons type="compose" size="34rpx" color="#fff"></uni-icons>
            <view>发布</view>
        </view>
        <view @click="navigator('/pages/message/index', 1)">
            <uni-icons type="chatboxes" size="34rpx" color="#fff"></uni-icons>
            <view>消息</view>
        </view>
        <view @click="navigator('/pages/home/index', 1)">
            <uni-icons type="home" size="34rpx" color="#fff"></uni-icons>
            <view>首页</view>
        </view>
    </view>
</template>
<script setup>

import Sort from "./Sort.vue";
import { onLoad } from '@dcloudio/uni-app'
import { timeAgo } from '../../utlis/time';
import { reactive, ref, toRaw } from 'vue';
import CommentList from "./CommentList.vue"
import request from "../../utlis/request";
import PictureList from "../../components/pictureList/index"
import appData from "../../stores/appData";
import { onPullDownRefresh } from '@dcloudio/uni-app'

const like = async (flag) => {
    let tid = topicsData.value.id;
    if (flag) {
        // 取消点赞
        let { data } = await request.delete(`/community/like/topics/${tid}`);
        if (data?.code == 1) {
            uni.showToast({
                title: data.data,
                duration: 2000
            });
            topicsData.value.is_like = !topicsData.value.is_like;
            topicsData.value.like_number = topicsData.value.like_number - 1
        } else {
            uni.showToast({
                title: data.msg,
                duration: 2000
            });
        }
    } else {
        // 点赞
        let { data } = await request.post(`/community/like/topics/${tid}`);
        if (data?.code == 1) {
            uni.showToast({
                title: data.data,
                duration: 2000
            });
            topicsData.value.is_like = !topicsData.value.is_like;
            topicsData.value.like_number = topicsData.value.like_number + 1
        } else {
            uni.showToast({
                title: data.msg,
                duration: 2000
            });
        }
    }

}
const skip = (url) => {
    location = url;
}
const mode = ref(1);
const images = ref([]);
const spread = ref([]);
let id = 0;

const navigator = (url, type) => {
    if (type) {
        uni.switchTab({
            url: url
        });
    } else {
        uni.navigateTo({
            url: url
        });
    }
}

const getCommentData = async (mode = 1) => {
    let { data } = await request(`/community/topics/comments/${id}?sort=${mode}`);
    if (data.code == 1) {
        cList.value = data.data;
    } else {
        uni.showToast({
            icon: "none",
            title: data.msg,
            duration: 2000
        });
        cList.value = [];
    }
}
const loadData = async () => {
    let { data: { data } } = await request(`/community/topics/${id}`);
    topicsData.value = data;
    images.value = data.images;
    spread.value = appData.spread;
}
onLoad(async (options) => {
    try {
        uni.showShareMenu({
            withShareTicket: true,
            menus: ["shareAppMessage", "shareTimeline"]
        });
    } catch (e) {
        console.log("不支持分享");
    }
    id = options.id;
    loadData();
    getCommentData(1);
});

onPullDownRefresh(async () => {
    loadData();
    getCommentData(1)
})
let content = ref("");
// 评论内容



const topicsData = ref({
    "id": 1,
    "uid": 1,
    "title": "",
    "createtime": 1723746227,
    "content": "",
    "images": [],
    "is_block": false,
    "like_number": 0,
    "is_like": 0,
    "is_collect": 0,
    "views": 0,
    "tag_id": 1,
    "comment_number": 0,
    "eid": 0,
    "user": {
        "id": 1,
        "avatar": "",
        "nickname": "",
        "is_block": false
    }
});

const show = ref(false);

const cList = ref([]);

const commentData = ref({});
const open = (opt) => {
    commentData.value = {
        "comment_id": opt.comment_id || 0,
        "content": "",
        "topic_id": topicsData.value.id,
        "ruid": opt.ruid || 0,
        "type": 1
    };
    content.value = "";
    show.value = true;
}
const close = () => {
    show.value = false;
}
const share = () => {
    uni.setClipboardData({ data: location.href })
    // 触发分享
    console.log("触发分享");
};
const collect = async (flag) => {
    let tid = topicsData.value.id;
    if (flag) {
        // 取消收藏
        let { data } = await request.delete(`/community/my/collect/topics/${tid}`);
        if (data?.code == 1) {
            uni.showToast({
                title: data.data,
                duration: 2000
            });
            topicsData.value.is_collect = !topicsData.value.is_collect;
        } else {
            console.log('失败');
        }
    } else {
        // 触发收藏
        let { data } = await request.post(`/community/collect/topics/${tid}`);
        if (data?.code == 1) {
            uni.showToast({
                title: data.data,
                duration: 2000
            });
            topicsData.value.is_collect = !topicsData.value.is_collect;
        } else {
            console.log('失败');
        }
    }

};

const report = async () => {
    let res = await uni.showModal({
        title: '提示',
        content: '是否要举报该帖子',
    });
    if (res.confirm) {
        let phone_number = prompt("请填写手机号，方便管理员核实");
        if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone_number)) {
            let { data } = await request.post(`/community/report/${topicsData.value.id}`, {
                "remark": `快捷举报联系方式:${phone_number}`,
                "reported_type": 1
            });
            if (data.code == 1) {
                uni.showToast({
                    icon: "none",
                    title: '举报成功，请留意电话',
                    duration: 2000
                });
            } else {
                uni.showToast({
                    icon: "none",
                    title: data.msg,
                    duration: 2000
                });
            }

        } else {
            uni.showToast({
                icon: "none",
                title: '手机号验证失败',
                duration: 2000
            });
        }
    } else if (res.cancel) {
        console.log('用户点击取消');
    }
    // 触发举报
    console.log("触发举报");
}
let error = ref("");
let timer = null;
const reply = async () => {
    if (content.value == "") {
        error.value = "不能发送空评论";
        clearTimeout(timer);
        setTimeout(() => {
            error.value = "";
        }, 2000);
    } else {
        commentData.value.content = content.value;
        let { data } = await request.post(`/community/replies`, toRaw(commentData.value));
        if (data.code == 1) {
            content.value = "";
            show.value = false;
            uni.showToast({
                title: "发表评论成功",
                duration: 2000,
                icon: "none"
            });
            console.log(mode.value);

            await getCommentData(mode.value);
        } else {
            uni.showToast({
                title: "发布失败",
                duration: 2000,
                icon: "none"
            });
        }
        // 发布评论
    }
}
const change = async (_mode) => {
    // 更改帖子排序方式
    mode.value = _mode;
    await getCommentData(_mode);
}

</script>
<style scoped>
@import "./index.css";
</style>