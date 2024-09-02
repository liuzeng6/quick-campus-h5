import request from '@/utlis/request.js'

/**
 * 根据关键字搜索帖子
 */
export const getSearch = (keyword) => request.get('/community/search/topics', {
    params: {
        keyword,
    }
});

/**
 * 获取热榜帖子
 */
export const getTopics = () => request.get('/community/popular/topics')

/**
 * 获取标签
 */
export const getTags = () => request.get('/community/tags')
/**
 * 获取所有帖子
 */
export const getTopiceAll = (pageInfo, tag_id) => {
	return request.get(`/community/topics`,{
		params: {
			page: pageInfo.page,
			pageSize: pageInfo.pageSize,
			tag_id
		}
	})
}
