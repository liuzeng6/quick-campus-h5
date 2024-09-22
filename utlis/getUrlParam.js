export default function getUrlParam(urlStr, urlKey) {
    const url = new URL(urlStr) // 字符串转换成url格式
    const paramsStr = url.search.slice(1) // 获取'?'后面的参数字符串
    const paramsArr = paramsStr.split('&') // 分割'&'字符 获得参数数组
    for (let i = 0; i < paramsArr.length; i++) {
        const tempArr = paramsArr[i].split('=')
        if (tempArr[0] === urlKey) {
            return tempArr[1]
        }
    }
}