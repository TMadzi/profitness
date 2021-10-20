<template>
        <div class="bg-primary  pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-6" :class="[isPurpleBg==true ? 'bg-primary text-white' : 'bg-white text-primary']">
          <div>
            <h3 class="text-sm font-semibold uppercase text-center tracking-wide">{{rateName}}</h3>
            <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div class="mt-3 flex items-center">
                <p class="text-4xl font-extrabold tracking-tight">${{feeAmount}}</p>
                <div class="ml-4">
                  <p class="text-sm" :class="[isPurpleBg==true ? 'text-white' : 'text-gray-500']" >USD / mo</p>
                  <p v-if="isJoining==true" class="text-gray-200 text-sm" :class="[isPurpleBg==true ? 'text-gray-200' : 'text-gray-500']" >${{joinAmount}} joining fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        feeAmount: Number,
        isJoining: Boolean,
        joinAmount: Number,
        rateName: String,
        isPurpleBg: Boolean
    }
})
</script>