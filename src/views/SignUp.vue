<template>
  <div>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Регистрация
          </h2>
        </div>
        <div class="mt-8 space-y-6">
          <!--          <input type="hidden" name="remember" value="true">-->
          <div class="rounded-md shadow-sm -space-y-px">
<!--            email-->
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email address"
                     v-model="user.email"
              >
            </div>
<!--            password-->
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password"
                     v-model="user.password"
              >
            </div>
<!--            name-->
            <div>
              <label for="name" class="sr-only">Name</label>
              <input id="name" name="name" type="text" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Name"
                     v-model="user.name"
              >
            </div>
          </div>

          <div>
            <button
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="submit"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data: () => ({
    user: {
      email: '',
      password: '',
      name: ''
    },
    error:null
  }),
  methods:{
    submit() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then(data => {
            data.user
                .updateProfile({
                  displayName: this.form.name
                })
                .then(() => {
                  this.$router.push({name: 'Login'})
                });
          })
          .catch(err => {
            this.error = err.message;
          });
    }
  }
}
</script>

