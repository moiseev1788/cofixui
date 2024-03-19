import { createApp } from 'vue'
import Vue3Marquee from 'vue3-marquee'
import './assets/css/base.css'
import './assets/css/main.scss'
import './assets/css/formBitrix.scss'
import App from './App.vue'


//убираем прокрутку в 100vh
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

createApp(App).use(Vue3Marquee).mount('#app')
