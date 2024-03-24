import { createApp } from "vue";
import App from "./App.vue";
// グローバルにスタイルを反映
import "./assets/style/global.css";

const app = createApp(App);
// アプリをマウント
app.mount("#app");
