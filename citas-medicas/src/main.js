import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router";

// import 'bootstrap'

// import '/node_modules/bootstrap/dist/css/bootstrap.css'
// import '/node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import datePicker from 'vue-bootstrap-datetimepicker';
const app = createApp(App);

app.use(datePicker);
app.use(store);
app.use(router);
app.mount("#app");
