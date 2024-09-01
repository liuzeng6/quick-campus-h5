import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', () => {
	const Authorization = 'OoPvL6mSXGJ7crsbcYCPBTDI91dK86IN'
	
	return {
		Authorization
	}
},{
  // 设置持久化
	persist: true
})