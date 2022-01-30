<script lang="ts">
import Vue from 'vue'
import FacilityGridItem from './../models/FacilityGridItem'

export default Vue.extend({
  props: {
    id: Number,
    className: String,
    trainer: String
  }
})
</script>
<template>
  <div
    class="text-center h-20 py-2 border-1 border-white text-gray-700 flex flex-col gap-px justify-center bg-purple-200 lg:(py-3 gap-1 border-6) "
    :class="trainer==''?'':'hover:(cursor-pointer bg-purple-300 transition-all duration-200)'"
    @click="$emit('open-modal')"
  >
    <p class="font-bold uppercase text-gray-600 text-xs lg:(text-md)">
      {{ trainer }}
    </p>
    <p class="uppercase text-gray-500 text-xs lg:(text-sm)" :class="trainer===''? 'font-bold text-lg':''">
      {{ className }}
    </p>
  </div>
</template>

