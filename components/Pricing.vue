<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-coming-bg bg-cover bg-fixed">
  <div class="h-full bg-black bg-opacity-50">
  <SectionTitle class="mt-16" text1="Rate" text2="Card"  size="text-4xl" color2="text-primary" color1="text-gray-100" />

    <h2 class="sr-only">Rates</h2>
    <!-- Cards -->
    <div class="relative mt-8 max-w-2xl mx-auto px-4 pb-24 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Decorative background -->
      <div aria-hidden="true" class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 rounded-tl-lg rounded-tr-lg lg:block"></div>


      <div class="relative space-y-6 gap-y-4 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3">
        <RateCardItem
          v-for="rate in rates"
          :key="rate.rateName"
          :feeAmount="rate.feeAmount"
          :joinAmount="rate.joinAmount"
          :rateName="rate.rateName"
          :isJoining="rate.isJoining"
          :isPurpleBg="rate.isPurpleBg"
        />
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        const rates = [
            {
              feeAmount: 80,
              isJoining: true,
              joinAmount: 20,
              rateName: "Adult",
              isPurpleBg: false
            },
                        {
              feeAmount: 60,
              isJoining: true,
              joinAmount: 20,
              rateName: "Student",
              isPurpleBg: true
            },
            {
              feeAmount: 60,
              isJoining: false,
              joinAmount: 0,
              rateName: "Pensioner",
              isPurpleBg: false
            },
        ]
                return {
                rates
            }
    }
})
</script>