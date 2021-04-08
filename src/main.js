import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/tailwind.css'
import store from '@/store'

import { ObserveVisibility } from 'vue-observe-visibility';
import './assets/tailwind.css'

createApp(App)
    .use(store)
    .use(router)
    .directive('observe-visibility', {
        beforeMount: (el, binding, vnode) => {
            vnode.context = binding.instance;
            ObserveVisibility.bind(el, binding, vnode);
        },
        update: ObserveVisibility.update,
        unmounted: ObserveVisibility.unbind,
    })
    .mount('#app')
