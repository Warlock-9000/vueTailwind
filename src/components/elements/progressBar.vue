<template>
  <div
      class="w-full bg-gray-200 h-2 relative overflow-hidden"
      :class="[{'rounded-full': rounded}, { indeterminate: indeterminate}]"
  >
    <div
        class="h-full progressbar"
        :class="[getBackGroundColor, {'absolute top-0': indeterminate}, {'rounded-full': rounded}]"
        role="progressbar"
        :style="{width: `${percentage}%`}"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
    >
      <span class="flex items-center h-full">
        <slot></slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  data: () => ({}),
  props: {
    color: {
      type: String,
      default: "green"
    },
    percentage: {
      type: Number,
      default: 0
    },
    rounded: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean
  },
  computed:{
    getBackGroundColor: ()=>{
      return 'bg-green-500'


      // почему это не рабоает? TODO: Спросить Рому и пофиксить.
 /*     let color = this.color
      let colors = {
        'green':'bg-green-500',
        'red':'bg-red-500'
      }
      if (!(this.color in colors)) return 'bg-green-500'
      return colors[color]*/
    }
  }
};
</script>
<style scoped>
@keyframes progress-indeterminate {
  0% {
    width: 30%;
    left: -40%;
  }
  60% {
    left: 100%;
    width: 100%;
  }
  to {
    left: 100%;
    width: 0;
  }
}

.progressbar {
  transition: width 0.25s ease;
}

.indeterminate .progressbar {
  animation: progress-indeterminate 1.4s ease infinite;
}
</style>