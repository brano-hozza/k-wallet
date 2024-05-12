import { UseWagmiPlugin } from 'use-wagmi'
import { config } from '~/config/wagmi'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(UseWagmiPlugin, { config })
})
