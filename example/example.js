import Vue from "vue";

import example from "./example.vue";
import VueTinymce from "../src/vue-tinymce";


// import "tinymce/plugins/autoresize/plugin";

Vue.use(VueTinymce);

new Vue({
    el    : '#app',
    render: h => h(example)
});