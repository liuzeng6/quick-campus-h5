import appData from "../stores/appData";
import { baseURL } from "./request";

export function preview(urls) {
    uni.previewImage({
        urls: [...urls],
    });
}

export function loadImage(url, zip) {

    if (Array.isArray(url)) {
        console.log(url.map(el => appData.staticServer + url));

        return url.map(el => appData.staticServer + url);
    }
    if (zip) {
        let path = appData.staticServer + url + "/zip";
        return path;
    }
}