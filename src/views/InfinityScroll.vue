<template>
  <div>

    <div class="border-dashed border-4 border-blue-500 mx-10">
      <p> Скролл через библу</p>
      <DIInfinityScroll/>
    </div>

    <div class="border-dotted border-4 border-purple-500 mx-10 p-14  h-64 xl:overflow-y-scroll">
      <p>Скролл через кастом элемент</p>

      <div class="w-10 h-20  border-2  border-dashed border-blue-500"
           v-if="bottomDivHeight"
           :style="{height:topDivHeight}"
      >
      </div>
      <ul>
        <Observer @intersect="visibilityHandleTop" :options="{bottomMargin: '60px'}"/>

        <li class="list-item" v-for="item in visibleItems" :key="item">Item: {{ item }}</li>

        <Observer @intersect="visibilityHandleBottom"/>

      </ul>
      <!--      <div class="w-10 h-20  border-2  border-dashed border-blue-500"
                 v-if="bottomDivHeight"
                 :style="{height:bottomDivHeight}"
            >
            </div>-->
    </div>


  </div>
</template>

<script>
import DIInfinityScroll from "@/components/elements/DIInfinityScroll";
import Observer from "@/components/elements/Observer";

export default {
  name: "InfinityScroll",
  data: () => ({
    pageSize: 50,
    pageNumber: 0,
    maxSizeVisiblePages: 2, // number of pages
    items: [],
    visibleItems: [],
    topDivHeight: 0,
    bottomDivHeight: 0,
    scrollDirect: 'bottom' // bottom / top
  }),
  components: {
    Observer,
    DIInfinityScroll
  },
  methods: {

    visibilityHandleBottom() {
      //a few page has been scrolled check scroll direct
      if (this.scrollDirect !== 'bottom') {
        this.pageNumber++;
        this.scrollDirect = 'bottom'
      }

      //getNextPage
      let data = this.getNextPage()
      // console.log(data)

      //Update current page number
      this.pageNumber++

      //add new items to Visible Items
      data = [...this.visibleItems, ...data]

      // Check limits
      if (data.length > this.maxSizeVisibleItems) data = data.slice(-1 * this.maxSizeVisibleItems)

      //set new Current Vision block
      this.visibleItems = data
      console.log('Current page: ' + this.pageNumber)

    },
    visibilityHandleTop() {

      //check current page
      if (this.pageNumber === 0 || this.visibleItems[0] === 0) return
      console.info('top', this.visibleItems.length)

      //a few page has been scrolled
      if (this.scrollDirect !== 'top') {
        this.pageNumber--;
        this.scrollDirect = 'top'
      }

      //Update current page number
      this.pageNumber--

      //getPrevPage
      let data = this.getPrevPage()

      //add previous items
      data = [...data, ...this.visibleItems]

      //Check limits
      if (data.length > this.maxSizeVisibleItems) data = data.slice(0, this.maxSizeVisibleItems)

      //set new Current Vision block
      this.visibleItems = data
      console.log('Current page: ' + this.pageNumber)
    },
    generateData(start, stop) {
      console.log('generate')
      let result = []
      for (; start < stop; start++) {
        result.push(start)
      }
      return result
    },
    getNextPage() {
      let from = (this.pageNumber) * this.pageSize
      let to = (this.pageNumber + 1) * this.pageSize
      console.log('getNext', from, to)
      return (this.items.slice(from, to).length > 0
          ? this.items.slice(from, to)
          : this.generateData(from, to))
    },
    getPrevPage() {
      let from = (this.pageNumber - 1) * this.pageSize
      let to = this.pageNumber * this.pageSize
      console.log('getPrev', from, to)
      return (this.items.slice(from, to).length > 0
          ? this.items.slice(from, to)
          : this.generateData(from, to))
    }
  },
  computed: {
    maxSizeVisibleItems() {
      return this.maxSizeVisiblePages * this.pageSize
    }
  }
}
</script>
