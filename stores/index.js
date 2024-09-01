import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

const pinai = createPinia()
pinai.use(persistedstate)

export default pinai

export * from './modules/user.js'