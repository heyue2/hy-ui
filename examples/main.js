import Vue from 'vue'
import App from './App.vue'
import HyUI from '../packages'

Vue.config.productionTip = false
Vue.use(HyUI)

new Vue({
    render: h => h(App),
}).$mount('#app')