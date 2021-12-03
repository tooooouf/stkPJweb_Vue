import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@egoist/vue-head'
import VueScrollTo from 'vue-scrollto'
import '@/assets/sass/fonts.scss'

const head = createHead();

createApp(App).use(router).use(head).use(VueScrollTo, {
    container: "body",
    duration: 300,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true
}).mount('#app');