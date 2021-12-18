<template>
    <div class="px-4 lg:(px-32)">
    <h3 class="font-bold text-2xl text-center uppercase text-primary my-8">General</h3>
      <div class="relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3">
        <RateCardItem
          v-for="rate in rates"
          :key="rate.rateName"
          :feeAmount="rate.feeAmount"
          :joinAmount="rate.joinAmount"
          :rateName="rate.rateName"
          :isJoining="rate.isJoining"
          :isPurpleBg="rate.isPurpleBg"
          :periodString ="rate.periodString"
          class="shadow-2xl"
        />
      </div>
<h3 class="font-bold text-2xl text-center uppercase text-gray-700 my-8">Family</h3>
      <div class="relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3">
        <RateCardItem
          v-for="rate in famRates"
          :key="rate.rateName"
          :feeAmount="rate.feeAmount"
          :joinAmount="rate.joinAmount"
          :rateName="rate.rateName"
          :isJoining="rate.isJoining"
          :isPurpleBg="rate.isPurpleBg"
          :periodString ="rate.periodString"
          class="shadow-2xl"
        />
      </div>
<h3 class="font-bold text-2xl text-center uppercase text-primary my-8">Group</h3>
      <div class="relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3">
        <RateCardItem
          v-for="rate in groupRates"
          :key="rate.rateName"
          :feeAmount="rate.feeAmount"
          :joinAmount="rate.joinAmount"
          :rateName="rate.rateName"
          :isJoining="rate.isJoining"
          :isPurpleBg="rate.isPurpleBg"
          :periodString ="rate.periodString"
          class="shadow-2xl"
        />
      </div>
  <h3 class="font-bold text-2xl text-center uppercase text-primary my-8">Casual</h3>
      <div class="relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3">
        <RateCardItem
          v-for="rate in casualRates"
          :key="rate.rateName"
          :feeAmount="rate.feeAmount"
          :joinAmount="rate.joinAmount"
          :rateName="rate.rateName"
          :isJoining="rate.isJoining"
          :isPurpleBg="rate.isPurpleBg"
          :periodString ="rate.periodString"
          class="shadow-2xl"
        />
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
              isPurpleBg: false,
              periodString: "mo"
            },
                        {
              feeAmount: 60,
              isJoining: true,
              joinAmount: 20,
              rateName: "Student",
              isPurpleBg: true,
              periodString: "mo"
            },
            {
              feeAmount: 60,
              isJoining: false,
              joinAmount: 0,
              rateName: "Pensioner",
              isPurpleBg: false,
              periodString: "mo"
            },
        ]
                const famRates = [
            {
              feeAmount: 75,
              isJoining: false,
              joinAmount: 0,
              rateName: "Couples",
              isPurpleBg: true,
              periodString: "mo"
            },
                        {
              feeAmount: 75,
              isJoining: false,
              joinAmount: 0,
              rateName: "Family Adult",
              isPurpleBg: false,
              periodString: "mo"
            },
            {
              feeAmount: 60,
              isJoining: false,
              joinAmount: 0,
              rateName: "Teen(16-21)",
              isPurpleBg: true,
              periodString: "mo"
            },
        ]
                const groupRates = [
            {
              feeAmount: 75,
              isJoining: false,
              joinAmount: 0,
              rateName: "5-10 PEOPLE",
              isPurpleBg: false,
              periodString: "mo"
            },
                        {
              feeAmount: 70,
              isJoining: false,
              joinAmount: 0,
              rateName: "11-20 PEOPLE",
              isPurpleBg: true,
              periodString: "mo"
            },
            {
              feeAmount: 60,
              isJoining: false,
              joinAmount: 0,
              rateName: "20+ PEOPLE",
              isPurpleBg: false,
              periodString: "mo"
            },
        ]
                        const casualRates = [
            {
              feeAmount: 10,
              isJoining: false,
              joinAmount: 0,
              rateName: "Daily",
              isPurpleBg: true,
              periodString: "day"
            },
                        {
              feeAmount: 40,
              isJoining: false,
              joinAmount: 0,
              rateName: "Weekly",
              isPurpleBg: false,
              periodString: "week"
            },
            {
              feeAmount: 75,
              isJoining: false,
              joinAmount: 0,
              rateName: "10 Sessions",
              isPurpleBg: true
            },
           {
              feeAmount: 90,
              isJoining: false,
              joinAmount: 0,
              rateName: "15 Sessions",
              isPurpleBg: false
            },
        ]
                return {
                rates,
                famRates,
                groupRates,
                casualRates
            }
    }
})
</script>