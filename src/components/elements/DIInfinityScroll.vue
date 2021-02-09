<template>
  <div>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="overflow-auto h-64 w-20 rounded-md bg-rose-200">
        <ul >
          <li v-for="item in numbers" :key="item+'key'">{{ item }}</li>
        </ul>
        <div v-observe-visibility="endHandle">end</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DIInfinityScroll",
  data: () => ({
    items:[],
    offset:0,
    pageSize:100,
    currentVisionBlock: [],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    currentNumber: 10

  }),
  methods: {
    endHandle() {
      // console.log('123')
      this.numbers.push(this.currentNumber)
      this.currentNumber++
    }
  },
/*  computed:{
    seedData(numberOfItems){
      let data = []
      for(let i = 0; i < numberOfItems; i++){
        data.push(i);
      }
      return data;
    }
  },*/
  beforeMount() {
    // this.items = this.seedData(this.pageSize)
  }
}
</script>

<style scoped>

</style>