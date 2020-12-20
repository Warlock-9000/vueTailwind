<template>
  <div class="home">


    <link rel="stylesheet"
          href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css"
          integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM="
          crossorigin="anonymous"
    >
    <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <span @click="logOut"
            class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
            style="top: 50%;"
      >
        <i class="fas fa-circle-notch fa-spin fa-5x"/>
      </span>
    </div>


<!--    <p>Состояние авторизации:{{ isLogin }}</p>-->

  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      isLogin: false
    }
  },
  created() {
    if (localStorage.Islogin) {
      this.isLogin = localStorage.Islogin;
    }
  },
  methods: {
    logOut() {
      console.log(123)
      this.$store.commit('SET_STATUS', false);
      localStorage.Islogin = false
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
