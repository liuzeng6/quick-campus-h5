import request from '../utlis/request.js'

export const getTopics = () => request.get('/community/popular/topics')