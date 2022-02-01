<template>
    <div class="pb-16">
        <div class="relative">
        <PageHeader class="bg-top mb-16" height="h-72 lg:(h-small-img)" pos="bg-top" img="https://res.cloudinary.com/defmmlrqg/image/upload/v1639984107/Pro%20Fitness/desk-2_t9lg9s.jpg"/>
             <div class="bg-black absolute top-0 opacity-60 w-full h-full flex flex-col items-center justify-center">
            <h1 class="relative text-white flex  align-bottom justify-center  text-8xl  text-center font-bold md:(text-9xl leading-44 px-16 justify-center) tracking-wide w-full opacity-90">RATES</h1>
             </div>
        </div>
   <Rates/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        const trainers = [
            {
                name: "Danisa",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-18-removebg-preview_pq6ykf.png"
            },
                        {
                name: "Anton",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1635361852/Pro%20Fitness/trainer/IMG-20211025-WA0028-removebg-preview_thrns4.png"
            },
                        {
                name: "Michelle",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528307/Pro%20Fitness/staff/photo_2021-11-03_08-33-46-removebg-preview_nu8wji.png"
            },
                        {
                name: "Irvine",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-26-removebg-preview_mtewct.png"
            },
                                    {
                name: "Sheraine",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-04-removebg-preview_hn9nrp.png"
            },
                                    {
                name: "Paul",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-22-removebg-preview_fiy5d7.png"
            },
                        {
                name: "Zu",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-29-removebg-preview_r3bnch.png"
            },
                        {
                name: "Shayle",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-11-removebg-preview_at0n11.png"
            },
                                    {
                name: "Mugo",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-07-removebg-preview_notjkc.png"
            },
                                    {
                name: "Dagmawi",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528307/Pro%20Fitness/staff/photo_2021-11-03_08-34-11-removebg-preview_aabfvn.png"
            },

        ]
                return {
                trainers
            }
    }
})
</script>
