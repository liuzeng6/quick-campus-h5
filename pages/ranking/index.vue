<template>
     <scroll-view :scroll-y="true" id="page">
          <view class="title">
               <view class="frequency">每五分钟更新一次</view>
               <view class="slogan">有事没事逛十大</view>
          </view>
          <view class="items">
               <view class="item" v-for="(el, index) in list">
                    {{ el.title }}
               </view>
          </view>
     </scroll-view>
</template>
<script setup>
import { onMounted, ref } from "vue"
import { getTopics } from "../../api";
let list = ref([]);
onMounted(async () => {
     let { data: { data: res } } = await getTopics();
     list.value = res;
})

</script>
<style scoped lang="scss">
#page {
     background-color: #fff;
     height: calc(100vh - 85rpx);

     .title {
          height: 70rpx;
          line-height: 70rpx;
          display: flex;
          box-sizing: border-box;
          padding: 0rpx 40rpx;
          font-size: 26rpx;
          border-bottom: 1rpx solid #FAFAFA;

          .frequency {
               flex: 1;
          }

     }
}
</style>
