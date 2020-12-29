<template>

  <div id="nav" class="overflow-hidden fixed top-10 left-10 w-full font-bold text-gray-700 flex justify-between select-none">
    <div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login Page</router-link>
      |
      <router-link to="/restorePass">Restore Password</router-link>
      |
      <router-link :to="{name:'myIp'}"> Show my IP</router-link>
    </div>
    <button
        class=" mr-20 flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        type="button"
        v-if="isLogin"
        @click="logOut">Выход
    </button>
  </div>

  <router-view class="px-5"/>

</template>
<script>
export default {
  methods: {
    logOut() {
      this.$store.commit('SET_STATUS', false);
      localStorage.Islogin = false
      this.$router.push({name: 'Login'})
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
