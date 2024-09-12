export default {
    openid: uni.getStorageSync('openid'),
    auth: false,
    staticServer: process.env.NODE_ENV == "development" ? "http://localhost:3000/uploads_files/" : "https://cymmc.top:3000/uploads_files/",
    tags: [],
    spread: []
}