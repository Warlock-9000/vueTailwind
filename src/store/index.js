import {createStore} from 'vuex'

export default createStore({
    state: {
        user: {
            loggedIn: false
        }
    },
    mutations: {
        SET_STATUS(state, value) {
            state.user.loggedIn = value;
        },
    },
    getters: {
        auth(state) {
            return state.user
        },
        isLogin(state){
            return state.user.loggedIn
        }
    }
})
