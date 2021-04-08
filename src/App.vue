<template>

  <div id="nav"
       class="overflow-hidden fixed top-10 left-10 w-full font-bold text-gray-700 flex justify-between select-none">
    <div>
      <router-link :to="{name: 'Home'}">Home</router-link>
      |
      <router-link :to="{name: 'About'}">About</router-link>
      |
      <router-link :to="{name: 'Login'}">Login Page</router-link>
      |
      <router-link :to="{name: 'RestorePassword'}">Restore Password</router-link>
      |
      <router-link :to="{name:'myIp'}"> Show my IP</router-link>
      |
      <router-link :to="{name:'infinityScroll'}">infinityScroll</router-link>
    </div>
    <div v-if="this.$store.getters.getEmail">
      <p>Email:{{this.$store.getters.getEmail}}</p>
    </div>

    <div class="mr-20">
      <div v-if="!isLogin">
        <button
            class="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="button"
            @click="login">Войти
        </button>
        <button
            class="ml-5 flex-shrink-0 text-base text-purple-500 font-semibold py-2 px-4 border border-purple-500 rounded-lg hover:bg-purple-200 transition duration-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 "
            type="button"
            @click="signUp">Зарегистрироваться
        </button>
      </div>
      <div v-if="isLogin">
        <button
            class="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="button"
            @click="logOut">Выход
        </button>
      </div>

    </div>
  </div>

  <router-view class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"/>

</template>
<script>
export default {
  methods: {
    logOut() {
      this.$store.commit('SET_STATUS', false);
      localStorage.Islogin = false
      this.$router.push({name: 'Login'})
    },
    login() {
      this.$router.push({name: 'Login'})
    },
    signUp() {
      alert('На регистратуру проходим')
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
