<template>
    <view class="images">
        <view class="item" v-for="item in props.images" @click.stop="preview(loadImage(props.images))">
            <image class="img" :src="loadImage(item, true)" mode="aspectFill"></image>
        </view>
    </view>
</template>
<script setup>
import appData from '../../stores/appData';
import { preview, loadImage } from '../../utlis/image';
const props = defineProps({
    images: {
        type: Array,
        default: []
    }
});
</script>
<style scoped lang="scss">
.images {
    display: flex;
    flex-wrap: wrap;

    .item {
        margin-top: 5rpx;
        margin-right: 5rpx;
        min-width: 180rpx;
        max-width: 180rpx;
        min-height: 180rpx;
        max-height: 180rpx;

        ::v-deep uni-image {
            width: 180rpx;
            border-radius: 5rpx;
            height: 180rpx;
        }
        
        .img {
            width: 180rpx;
            height: 180rpx;
            // width: 100%;
            // height: 100%;
        }
    }
}
</style>