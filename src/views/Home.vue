<template>
  <div>
    <div class="flex justify-center items-center w-screen h-screen" v-if="!isReady">
      <div class="w-1/5 text-center select-none">
        <p class="text-3xl mb-10">Загрузка</p>
        <progress-bar :percentage="percentage"/>
      </div>
    </div>

    <div v-else class="container my-20 mx-auto px-4 md:px-12">

      <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="i in 9" :key="i">

          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">

            <a href="#">
              <img alt="Placeholder" class="block h-auto w-full" :src="'https://picsum.photos/600/400/?random='+i">
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" href="#">
                  Article Title {{ i }}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">
                {{ getCurrentDate }}
              </p>
            </header>

            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
              <a class="flex items-center no-underline hover:underline text-black" href="#">
                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                <p class="ml-2 text-sm">
                  Author Name
                </p>
              </a>
              <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
              </a>
            </footer>

          </article>
          <!-- END Article -->

        </div>
        <!-- END Column -->

      </div>
    </div>


  </div>
</template>

<script>
import progressBar from "@/components/elements/progressBar";

export default {
  name: 'Home',
  components: {
    progressBar
  },
  data: () => {
    return {
      isLogin: false,
      percentage: 0,
      isReady: false
    }
  },
  created() {
    if (localStorage.Islogin) {
      this.isLogin = localStorage.Islogin;
    }
  },
  mounted() {
    this.runProgressBar(3000);
  },
  methods: {
    logOut() {
      this.$store.commit('SET_STATUS', false);
      localStorage.Islogin = false
      this.$router.push('/login')
    },

    runProgressBar(time) {
      let interval = time / 100
      let frame = () => {
        if (this.percentage >= 100) {
          clearInterval(intervalDescriptor)
          this.isReady = true
        } else {
          this.percentage++
        }
      }
      let intervalDescriptor = setInterval(frame, interval)
    }
  },
  computed: {
    getCurrentDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      return mm + '/' + dd + '/' + yyyy;
    }
  }
}
</script>