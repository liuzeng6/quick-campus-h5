<template>
    <scroll-view :scroll-y="true" id="page">
        <view class="shortcut">
            <view class="item" v-for="(el, index) in shortcut" @click="skip(el.wechat_app_id, el.path, navigate_mode)">
                <view class="icon">
                    <image :src="el.icon_url"></image>
                </view>
                <view class="name">{{ el.name }}</view>
            </view>
        </view>
        <view class="ranking">
            <view class="sgin" @click="toRanking">
                <image src="../../static/images/hot.png"></image>
            </view>
            <swiper class="list" :indicator-dots='false' autoplay :interval='5000' circular :vertical='true'
                :duration='800'>
                <swiper-item v-for="(item, index) in hotTopicList" style="height: 88rpx;" class="item" :key="item.id"
                    @click="toDetail(item.tid)">
                    <view class="hot-title"><text style="margin-right: 10rpx;">{{ index + 1 }} </text> {{ item.title }}</view>
                </swiper-item>
            </swiper>
        </view>
        <view class="title">
            <view :class="checked == -1 ? 'item active' : 'item'" @click="changeMode(-1)">全部</view>
            <view :class="index == checked ? 'item active' : 'item'" v-for="(el, index) in appData.tags"
                @click="changeMode(index)">
                {{ el.tag }}
            </view>
        </view>
        <Topics :topicList="topicList" />
    </scroll-view>
    <tabbar checkedIndex="0"></tabbar>
</template>
<script setup>
import Topics from "@/components/topics/index"
import { ref, onMounted } from "vue";
import { getTopiceAll, getTopics } from "../../api";
import { onPullDownRefresh, onReachBottom, onLoad } from '@dcloudio/uni-app'
import request from '@/utlis/request.js'
import { useAppDataStore } from "@/stores";
const appData = useAppDataStore().config;

onReachBottom(async () => {
    let tag_id = checked.value == -1 ? undefined : checked.value;
    console.log(pageInfo);

    pageInfo.page += 1;
    const { data: { data: list } } = await getTopiceAll(pageInfo, tag_id);
    if (list.length) {
        topicList.value.push(...list);
    } else {
        pageInfo.page -= 1;
        console.log("已经是最后一页了");
    }
})
onLoad(async () => {
    try {
        uni.showShareMenu({
            withShareTicket: true,
            menus: ["shareAppMessage", "shareTimeline"]
        });
    } catch (e) {
        console.log("不支持分享");
    }
})

const toDetail = (tid) => {
    uni.navigateTo({
        url: `/pages/details/index?id=${tid}`
    })
};

onPullDownRefresh(async () => {
    pageInfo.page = 1;
    const { data: { data: list } } = await getTopiceAll(pageInfo, checked.value == -1 ? undefined : appData.tags[checked.value]?.id);
    topicList.value = list;
    uni.stopPullDownRefresh();
})
let shortcut = ref([]);
const checked = ref(-1);
const topicList = ref([]);
let pageInfo = {
    page: 1,
}
const hotTopicList = ref([]);

onMounted(async () => {
    let { data: { data } } = await request('/application/tools');
    shortcut.value = data;

    const { data: { data: list } } = await getTopiceAll(pageInfo);
    topicList.value = list;
    const { data: { data: arr } } = await getTopics();
    hotTopicList.value = arr;
})

const changeMode = async (index) => {
    let tag_id = appData.tags[index]?.id;
    if (index != checked.value) {
        pageInfo.page = 1;
        checked.value = index;
        const { data: { data: list } } = await getTopiceAll(pageInfo, tag_id);
        topicList.value = list;
    }
}

const toRanking = ()=>{
    uni.navigateTo({
         url: "/pages/ranking/index"
    });
}

const skip = (appid, path) => {
    try {
        uni.navigateToMiniProgram({
            appId: appid,
            path
        })
    } catch (e) {
        uni.showToast({
            icon: "none",
            title: '暂时不支持跳转',
            duration: 2000
        });
    }
}

</script>
<style scoped lang="scss">
#page {
    .shortcut {
        border-radius: 15rpx;
        background-color: #FFFFFF;
        margin: 10rpx 25rpx 25rpx;
        height: 140rpx;
        display: flex;

        .item {
            display: flex;
            margin: 0rpx 25rpx;
            margin-top: 18rpx;
            flex-direction: column;
            align-items: center;

            .icon {
                width: 70rpx;
                height: 70rpx;

                image {
                    width: 100%;
                    height: 100%;
                }
            }

            .name {
                font-size: 22rpx;
            }
        }
    }

    .ranking {
        // position: relative;
        border-radius: 24rpx 24rpx 0rpx 0rpx;
        background-color: #fefefe;
        display: flex;
        height: 130rpx;
        align-items: center;
        padding: 0rpx 25rpx;
        box-sizing: border-box;
        border-bottom: 1px solid #cfcccc;

        .sgin {
            background-color: #F3F3FF;
            border-radius: 15rpx;
            width: 88rpx;
            height: 88rpx;

            image {
                width: 100%;
                height: 100%;
            }
        }

        .list {
            height: 88rpx;
            flex: 1;
            margin-left: 20rpx;

            .item {
                box-sizing: border-box;
                padding: 0rpx 20rpx;
                font-weight: 700;
                display: flex;
                align-items: center;
                // line-height: 44rpx;
                font-size: 28rpx;
                height: 88rpx;

                .index {
                    margin-right: 10rpx;
                }
            }

            // position: absolute;
            // top: 0rpx;
            // flex: 1;
            // overflow: hidden;

            // .item {
            //     height: 88rpx;
            // }

        }
    }

    .title {
        position: sticky;
        top: 10rpx;
        display: flex;
        padding: 20rpx 0rpx 20rpx 20rpx;
        gap: 20rpx;
        overflow-x: auto;
        line-height: 80rpx;
        height: 80rpx;
        background-color: #F9F9F9;

        .item {
            font-size: 26rpx;
            color: #959595;
            white-space: nowrap;
        }

        .item.active {
            color: #181818;
            font-size: 28rpx;
            font-weight: 700;
        }
    }

}
</style>