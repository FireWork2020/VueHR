import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {postRequest} from "./utils/api";
import {postKeyValueRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {initMenu} from "./utils/menus";
import 'font-awesome/css/font-awesome.min.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import L from "leaflet";
import "leaflet/dist/leaflet.css"


Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

Vue.prototype.$video = Video
Vue.config.productionTip = false

Vue.use(ElementUI,{size:'small'});


router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        next();
    }else if (to.path == '/register'){
        next();
    } else{
        if (window.sessionStorage.getItem("user")) {
            initMenu(router, store);
            next();
        }else{
            next('/?redirect='+to.path);
        }
    }
})

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
