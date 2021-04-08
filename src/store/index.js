import {createStore} from 'vuex'

export default createStore({
    state: {
        user: {
            email: '',
            loggedIn: false
        }
    },
    mutations: {
        SET_EMAIL(state, value) {
            state.user.email = value
        },
        SET_STATUS(state, value) {
            state.user.loggedIn = value
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
        }

    }
})
