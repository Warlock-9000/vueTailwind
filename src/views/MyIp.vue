<template>
  <div class="flex justify-center min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <p class="bg-clip-border p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed font-bold p-20 select-none">Your
      IP: {{ ip }}</p>
  </div>
</template>

<script>
export default {
  name: "myIp",
  data: () => ({
    ip: ''
  }),
  mounted() {
    this.getIPFromAmazon()
    // this.myBicycle()
  },
  methods: {
    getIPFromAmazon() {
      //TODO: Получить IP с бэка
      this.ip = '127.0.0.1'
    },
  }
}
</script>