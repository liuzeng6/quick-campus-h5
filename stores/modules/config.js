import { defineStore } from 'pinia'
import { ref } from "vue"

export const useAppDataStore = defineStore('appDataStore', () => {
    const config = ref(
        {
            tags: [],
            spread: [],
            qc_code: ""
        }
    );
    return {
        config
    }
}, {
})