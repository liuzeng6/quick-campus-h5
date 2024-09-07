import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import { useUserStore } from '../stores/index.js'

const userStore = useUserStore()
const baseURL = 'http://cymmc.top:3000/'

const instance = axios.create({
  baseURL,
  timeout: 5000,
  adapter: mpAdapter,
  headers:{'Authorization': userStore.Authorization},
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
		return res;
	
	
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance
export { baseURL }