<template>
     <scroll-view :scroll-y="true" id="page">
          <view class="title">
               <view class="frequency">每五分钟更新一次</view>
               <view class="slogan">有事没事逛十大</view>
          </view>
          <view class="items">
               <view class="item" v-for="(el, index) in list">
                    hhaha
               </view>
          </view>
     </scroll-view>
</template>
<script setup>
let list = [
     {
          title: "哈哈哈"
     }, {
          title: "哈哈哈"
     }
];

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
