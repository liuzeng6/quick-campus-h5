import { defineStore } from 'pinia'
import { ref } from "vue"

export const useUserStore = defineStore('userStore', () => {
	const userInfo = ref({});
	return {
		userInfo: {
			"id": 1,
			"nickname": "游客",
			"avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
			"is_certificated": 9999,
			"name": "游客",
			"grade": null,
			"major": null,
			"wechat": null,
			"mobile": null
		}
	}
}, {
})