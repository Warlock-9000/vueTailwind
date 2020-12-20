<template>
  <div>
    <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:


    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ]
    }


  -->
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Войти в аккаунт
          </h2>
        </div>
        <div class="mt-8 space-y-6">
          <!--          <input type="hidden" name="remember" value="true">-->
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email address"
                     v-model="user.email"
                     @mouseover="hoverStatement"
                     @focus="focusStatement"
              >
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password"
                     v-model="user.password"
                     @mouseover="hoverStatement"
                     @focus="focusStatement"
              >
            </div>
          </div>

          <div class="flex items-center justify-between">

            <div class="text-sm">
              <router-link class="font-medium text-indigo-600 hover:text-indigo-500" to="/restorePass">Забыли пароль?
              </router-link>
            </div>
          </div>

          <div>
            <button
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="login"
            >
              Войти
            </button>
          </div>
        </div>
        <pre>{{ user }}</pre>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Login",
  data: () => {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    hoverStatement(e) {
      console.info(e)
    },
    focusStatement(e) {
      console.info(e)
    },
    login() {
      //Проверим email
      let isEmailValid = this.emailValidate(this.user.email)

      if (isEmailValid) {
        alert('email валиден')
        this.$store.commit('SET_STATUS', true);
        localStorage.Islogin = true
        this.$router.push('/')
      } else {
        alert('email невалиден')

      }
    },
    emailValidate(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>
