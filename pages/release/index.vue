<template>
    <scroll-view :scroll-y="true" id="page">
        <view class="edit">
            <input type="text" placeholder="标题(不超过20个字)" class="title" maxlength="20" v-model="title">
            <textarea class="input" placeholder="详细描述你的需求，禁止发布重复信息，违法违规，广告营销类的内容" maxlength="800" v-model="content">
            </textarea>
            <view :class="content.length ? 'count' : 'count hidden'">{{ content.length }} / 800</view>
            <view class="images">
                <view class="item" v-for="(el, index) in images">
                    <image :src="loadImage(el,true)" mode="scaleToFill" @click="preview(loadImage(images))"></image>
                    <view class="remove" @click.stop="remove(index)">
                        ×
                    </view>
                    <view class="left" @click.stop="promote(index)"> <uni-icons type="left" size="#FFFFFF"
                            szie="30rpx"></uni-icons></view>
                    <view class="right" @click.stop="descend(index)"><uni-icons type="right" size="#FFFFFF"
                            szie="30rpx"></uni-icons></view>
                </view>
                <view class="add-image item" @click="addImage" v-if="images.length < 9">
                    <view class="add">+</view>
                    <view class="text">添加图片</view>
                </view>

            </view>

            <view class="select-label">
                <view class="left">
                    帖子标签
                </view>
                <view class="right">
                    <picker @change="bindChange" :range="tags" range-key="tag">{{
                        tags.length ? tags.find(el => el.id == tag_id).tag : "" }} <uni-icons type="right" size="34rpx"
                            color="#9D9D9D"></uni-icons>
                    </picker>
                </view>
            </view>
        </view>
        <view class="btn" @click="publish">
            <uni-icons type="compose" size="34rpx" color="#fff"></uni-icons>
            <view>发布</view>
        </view>
        <view class="tips">
            请自觉遵守社区规范，如有违规会被删贴、禁言、关小黑屋
        </view>
    </scroll-view>
</template>
<script setup>
import { ref } from "vue";
import { onLoad } from '@dcloudio/uni-app'
import request from "../../utlis/request.js";
import appData from "@/stores/appData.js";
import { preview, loadImage } from '../../utlis/image';
import uniUploadFile from "@/utlis/uniUploadFile.js";

let tags = ref([]);
let tag_id = ref(1);

let title = ref("");
let content = ref("");
let images = ref([]);

let status = 0;
// 0表示没有选择图片 1表示上传中 2表示上传完成

onLoad(async (options) => {
    tag_id.value = options.mode || 1;
    // let { data: { data } } = await getTags();
    tags.value = appData.tags;
})
const promote = (index) => {
    uni.showToast({
        icon: "none",
        title: '不支持该操作',
        duration: 2000
    });
    console.log("上升");
}

const descend = (index) => {
    uni.showToast({
        icon: "none",
        title: '不支持该操作',
        duration: 2000
    });
    console.log("下降");
}

const remove = (index) => {
    images.value.splice(index, 1);
    // console.log("删除", index);
}

const bindChange = (e) => {
    let index = e.detail.value;
    tag_id.value = tags.value[index].id;
    console.log(tag_id);
}

const publish = async () => {
    if (title.value.length < 2) {
        uni.showToast({
            icon: "none",
            title: '标题不少于两个字',
            duration: 2000
        });
        return false;
    }
    if (content.value.length < 5) {
        uni.showToast({
            icon: "none",
            title: '内容不少于五个字',
            duration: 2000
        });
        return false;
    }
    if (status == 1) {
        uni.showToast({
            icon: "none",
            title: '请等待图片上传完成',
            duration: 2000
        });
        return false;
    }


    let data = {
        "content": content.value,
        "resources": images.value,
        "tag_id": tag_id.value,
        "title": title.value,
        // "eid": 0
    }
    let { data: res } = await request.post("/community/topics/publish", data);
    if (res.code == 1) {
        uni.showToast({
            icon: "none",
            title: '发布成功',
            duration: 2000
        });
        title.value = "";
        content.value = "";
        images.value = [];
    } else {
        uni.showToast({
            icon: "none",
            title: '发布失败，联系管理员',
            duration: 2000
        });
    }

}
const addImage = async () => {
    uni.chooseImage({
        success: async (chooseImageRes) => {
            const tempFilePaths = chooseImageRes.tempFilePaths;
            console.log(chooseImageRes);

            for (const el of tempFilePaths) {
                try {
                    status = 1;
                    let { data } = await uniUploadFile(el);
                    images.value.push(data.filename);
                    console.log(data);
                } catch (e) {
                    uni.showToast({
                        icon: "none",
                        title: '上传失败',
                        duration: 2000
                    });
                } finally {
                    status = 2;
                }
            }
        }
    });
    console.log("添加图片");
}

</script>
<style lang="scss" scoped>
#page {
    padding: 0rpx 20rpx;
    box-sizing: border-box;
    width: 100%;
    min-height: calc(100vh - 85rpx);
    background-color: #FFFFFF;

    .edit {
        .title {
            margin-bottom: 10rpx;
            font-size: 28rpx;
        }

        padding-top: 30rpx;

        .input {
            font-size: 28rpx;
            width: 100%;
        }

        .count {
            text-align: right;
            font-size: 20rpx;
            color: #8F8F8F;
        }

        .hidden {
            visibility: hidden;
        }

        .images {
            display: flex;
            flex-wrap: wrap;

            .item {
                margin: 5rpx;
                width: 170rpx;
                height: 170rpx;
                border-radius: 8rpx;
                overflow: hidden;
                position: relative;

                image {
                    width: 100%;
                    height: 100%;
                }

                .remove {
                    position: absolute;
                    top: 5rpx;
                    right: 5rpx;
                    text-align: center;
                    line-height: 34rpx;
                    border-radius: 50%;
                    background-color: #FB1E02;
                    width: 34rpx;
                    height: 34rpx;
                    color: #050101;
                }

                .left,
                .right {
                    top: 63rpx;
                    position: absolute;
                    width: 44rpx;
                    height: 30rpx;
                    background-color: transparent;
                }

                .left {
                    left: 0rpx;
                }

                .right {
                    right: 0rpx;
                }

            }
        }

        .add-image {
            background-color: #F6F6F6;
            width: 170rpx;
            height: 170rpx;
            border-radius: 10rpx;
            color: #8F8F8F;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin: 44rpx 0rpx;

            .add {
                font-weight: 600;
                font-size: 40rpx;
            }

            .text {
                font-size: 24rpx;
            }
        }
    }

    .select-label {
        color: #959595;
        display: flex;
        height: 95rpx;
        line-height: 95rpx;
        border-top: 1px solid #e5e2e2;
        border-bottom: 1px solid #e5e2e2;
        margin-top: 45rpx;

        .left {
            display: flex;
        }

        .right {
            flex: 1%;
            text-align: right;
        }
    }

    .btn {
        display: flex;
        line-height: 78rpx;
        width: 300rpx;
        justify-content: center;
        border-radius: 8rpx;
        margin: 95rpx auto;
        margin-bottom: 120rpx;
        height: 78rpx;
        background-color: #0063FF;
        color: #DCF2FF;
    }

    .tips {
        text-align: center;
        font-size: 23rpx;
        color: #9B9B9B;
    }
}
</style>