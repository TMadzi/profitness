<template>
    <div class="pb-16">
        <div class="relative">
        <PageHeader class="bg-top" height="h-72 lg:(h-small-img)" pos="bg-top" img="https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_1800/v1633426850/Pro%20Fitness/_SAM2568_2_xi6obn.jpg"/>
             <div class="bg-black absolute top-0 opacity-60 w-full h-full flex flex-col items-center justify-center">
            <h1 class="relative text-white flex  align-bottom justify-center  text-8xl  text-center font-bold md:(text-9xl leading-44 px-16 justify-center) tracking-wide w-full opacity-90">STAFF</h1>
             </div>
        </div>
         <MainText class="col-span-12 px-4 lg:(col-span-6 pt-12 px-32)"
    text1="We have a dedicated and professional staff who are ready to make your experience with us pleasant and enjoyable. Our team is also ready to assist with any challenges you may face while in our facility, so please don't hesitate in asking them for any thing."/>

   <StaffGrid  :data="staffMembers"/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        const staffMembers = [
            {
                name: "Sean",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528307/Pro%20Fitness/staff/photo_2021-11-03_08-34-15-removebg-preview_hwghd6.png"
            },
                        {
                name: "Tatenda",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-56-removebg-preview_df4pb3.png"
            },
                        {
                name: "Willard",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-45-removebg-preview_wc3wze.png"
            },
                        {
                name: "Delight",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-33-removebg-preview_zulgxs.png"
            },
                        {
                name: "Tawanda",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-37-removebg-preview_qlg9s7.png"
            },
                        {
                name: "Nelson",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-40-removebg-preview_zot0fz.png"
            },
                        {
                name: "Delight",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-52-removebg-preview_rhmcz6.png"
            },
                        {
                name: "Peter",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-48-removebg-preview_ldlvhd.png"
            },
        ]
                return {
                staffMembers
            }
    }
})
</script>