<template>
    {{ topicsData }}
</template>
<script setup>
import { useRoute } from 'vue-router';
import request from '@/utlis/request.js'
import { reactive } from 'vue';
const route = useRoute();
const topicsData = reactive({
    data: {

    }
})

let { id } = route.query;

let { data } = await request.get(`/community/topics/${id}`);
topicsData.data = data.data;

</script>
<style scoped></style>