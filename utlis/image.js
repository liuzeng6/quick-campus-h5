import appConfig from "./config";
export function preview(urls) {
    uni.previewImage({
        urls: [...urls],
    });
}

export function loadImage(url, zip) {

    if (Array.isArray(url)) {
        console.log(url.map(el => appConfig.staticServer + url));

        return url.map(el => appConfig.staticServer + url);
    }
    if (zip) {
        let path = appConfig.staticServer + url + "/zip";
        return path;
    }
}