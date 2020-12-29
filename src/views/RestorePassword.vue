<template>
  <div>
    <template v-if="!isRestore">
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Восстановить пароль
            </h2>
          </div>
          <div class="mt-8 space-y-6">
            <!--          <input type="hidden" name="remember" value="true">-->
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required
                       class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Email address"
                       v-model="email"
                >
              </div>
            </div>

            <div>
              <button
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  @click="restore"
              >
                Войти
              </button>
            </div>
          </div>
          <pre>{{ email }}</pre>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-lg w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Пароль выслан вам на почту!
            </h2>
            <div class="flex justify-center">
              <router-link class="mt-6 text-xl text-center text-blue-400" to="/">Вернуться на главную</router-link>
            </div>
          </div>
          <pre>{{ email }}</pre>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: "RestorePassword",
  data: () => {
    return {
      email: '',
      isRestore: false
    }
  },
  methods: {
    restore() {
      let isEmailValid = this.emailValidate(this.email)

      if (isEmailValid) {
        alert('email валиден')
        this.isRestore = true
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

<style scoped>

</style>