import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiTrashFill, IoEyeSharp } from "oh-vue-icons/icons";

addIcons(BiTrashFill, IoEyeSharp);

const app = createApp(App);
app.component('VIcon', OhVueIcon)
app.mount("#app")
