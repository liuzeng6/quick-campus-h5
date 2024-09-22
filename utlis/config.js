export default {
    openid: uni.getStorageSync('openid'),
    auth: false,            //认证流程是否结束
    staticServer: process.env.NODE_ENV == "development" ? "http://localhost:3000/uploads_files/" : "https://cymmc.top:3000/uploads_files/",
}