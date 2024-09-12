import appData from "../stores/appData";
import { baseURL } from "./request";


const uniUploadFile = (filePath) => new Promise((resolve, reject) => {
    {
        uni.uploadFile({
            url: baseURL + "/community/single/resources", //仅为示例，非真实的接口地址
            filePath: filePath,
            name: 'file',
            header: {
                Authorization: appData.openid
            },
            success: (uploadFileRes) => {
                try {
                    resolve(JSON.parse(uploadFileRes.data))
                } catch (e) {
                    reject(e);
                }
            },
            fail(err) {
                reject(err)
            }
        });
    }
});


export default uniUploadFile;