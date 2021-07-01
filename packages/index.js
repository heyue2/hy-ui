import HyButton from './hy-button.vue'
import HyDialog from './hy-dialog.vue'
import HyInput from './hy-input.vue'
import HySwitch from './hy-switch.vue'

const components = [
    HyButton,
    HyDialog,
    HyInput,
    HySwitch
]


const install = function(Vue) {
        components.forEach((item) => {
            Vue.component(item.name, item)
        });
    }
    //判断是否引入文件，如果是，就不调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install
}