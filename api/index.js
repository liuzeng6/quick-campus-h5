import request from '../utlis/request.js'

// 根据关键字搜索帖子
export const getSearch = (keyword) => request.get('/community/search/topics', {
    params: {
        keyword,
    }
});

export const getTopics = () => request.get('/community/popular/topics')