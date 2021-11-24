import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import '@/assets/sass/fonts.scss'

createApp(App).use(router).use(VueScrollTo, {
    container: "body",
    duration: 300,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true
}).mount('#app');