<template>
    <div>
        <PageHeader class="bg-top" height="h-small-img" pos="bg-top" img="https://res.cloudinary.com/defmmlrqg/image/upload/v1633426850/Pro%20Fitness/_SAM2568_2_xi6obn.jpg"/>
          <SectionTitle class="mt-4" text1="Personal" text2="Trainers"  size="text-4xl" color2="text-primary" color1="text-gray-700" />
         <MainText class="col-span-6 pt-4 px-32"
    text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
    text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
   />
   <StaffGrid :data="trainers" />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        const trainers = [
            {
                name: "Danisa",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633427113/Pro%20Fitness/_SAM2513_cmdywx.jpg"
            },
                        {
                name: "Anton",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633613063/Pro%20Fitness/munya_bq9fd1.png"
            },
                        {
                name: "Irvine",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633440207/Pro%20Fitness/irv-removebg-preview_gjc7fi.png"
            },
                        {
                name: "Zu",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633440052/Pro%20Fitness/Zu-removebg-preview_aghlxu.png"
            },
                        {
                name: "Shayle",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633439922/Pro%20Fitness/girl-removebg-preview_q2d44z.png"
            },
                        {
                name: "Kosta",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633441179/Pro%20Fitness/kosta-removebg-preview_f7jtgj.png"
            }
        ]
                return {
                trainers
            }
    }
})
</script>