import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/tailwind.css'
import store from '@/store'
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "my-super-vue-login.firebaseapp.com",
    projectId: "my-super-vue-login",
    storageBucket: "my-super-vue-login.appspot.com",
    messagingSenderId: "255201041230",
    appId: "1:255201041230:web:6f66e84b3626f1d1405c1f"
}
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/';


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
