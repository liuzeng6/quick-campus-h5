import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import appData from '../stores/appData.js'

const baseURL = process.env.NODE_ENV == "development" ? 'http://localhost:3000' : "https://cymmc.top:3000";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  adapter: mpAdapter,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (appData.openid) {
    config.headers.Authorization = appData.openid;
  } else {
    console.log("没有值");
    if (!appData.auth) {
      config.headers.Authorization = 'OoPvL6mSXGJ7crsbcYCPBTDI91dK86IN';
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  return res;


}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance
export { baseURL }