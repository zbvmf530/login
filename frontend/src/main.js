import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"; //Vuex 저장소 추가

createApp(App).use(store).mount("#app");
