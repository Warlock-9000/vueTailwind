import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from "@/store/modules/auth";

export default createStore({
    state: {
        user: {
            email: '',
            loggedIn: false,
            data: null
        }
    },
    getters: {
        auth(state) {
            return state.user
        },
        isLogin(state) {
            return state.user.loggedIn
        },
        getEmail(state){
            return state.user.email
        },
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_EMAIL(state, value) {
            state.user.email = value
        },
        //deprecated
        SET_STATUS(state, value) {
            state.user.loggedIn = value
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        }
    },
    modules:{
        auth
    },
    plugins: [createPersistedState()]
})
