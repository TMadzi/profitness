<template>
  <div class="pb-16">
    <div class="relative">
      <PageHeader class="bg-top" height="h-72 lg:(h-small-img)" pos="bg-top" img="https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_1800/v1633426850/Pro%20Fitness/_SAM2568_2_xi6obn.jpg" />
             <div class="bg-black absolute top-0 opacity-60 w-full h-full flex flex-col items-center justify-center">
            <h1 class="relative text-white flex  align-bottom justify-center  text-8xl  text-center font-bold md:(text-9xl leading-44 px-16 justify-center) tracking-wide w-full opacity-90">TRAINERS</h1>
             </div>
        </div>
    <MainText
      class="col-span-12 px-4 lg:(col-span-6 pt-12 px-32)"
      text1="A personal trainer is a health professional that can help you in all aspects of your fitness and exercise. Our personal trainers are equipped to help you in all phases of your fitness journey; from a novice first entering the gym, to an advanced athlete getting ready to perform at the highest level."
      text2="If you would like to have a persoanl trainer, please enquire at our front desk or approach the trainer directly and let your fitness journey begin!"
    />
    <StaffGrid :data="trainers" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    const trainers = [
      {
        name: 'Danisa',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-18-removebg-preview_pq6ykf.png'
      },
      {
        name: 'Anton',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/c_crop,h_560,w_417/v1635361852/Pro%20Fitness/trainer/IMG-20211025-WA0028-removebg-preview_thrns4.png'
      },
      {
        name: 'Michelle',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528307/Pro%20Fitness/staff/photo_2021-11-03_08-33-46-removebg-preview_nu8wji.png'
      },
      {
        name: 'Irvine',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-26-removebg-preview_mtewct.png'
      },
      {
        name: 'Sheraine',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-04-removebg-preview_hn9nrp.png'
      },
      {
        name: 'Paul',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-22-removebg-preview_fiy5d7.png'
      },
      {
        name: 'Zu',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-29-removebg-preview_r3bnch.png'
      },
      {
        name: 'Shayle',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-11-removebg-preview_at0n11.png'
      },
      {
        name: 'Mugo',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-07-removebg-preview_notjkc.png'
      },
      {
        name: 'Dagmawi',
        img: 'https://res.cloudinary.com/defmmlrqg/image/upload/v1636528307/Pro%20Fitness/staff/photo_2021-11-03_08-34-11-removebg-preview_aabfvn.png'
      }

    ]
    return {
      trainers
    }
  }
})
</script>
