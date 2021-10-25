<template>
    <div>
        <PageHeader class="bg-top" height="h-small-img" pos="bg-top" img="https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633426850/Pro%20Fitness/_SAM2568_2_xi6obn.jpg"/>
          <SectionTitle class="mt-4" text1="The Pro" text2="Team"  size="text-4xl" color2="text-primary" color1="text-gray-700" />
         <MainText class="col-span-6 pt-4 px-32"
    text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
    text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
   />
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
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633427113/Pro%20Fitness/_SAM2513_cmdywx.jpg"
            },
                        {
                name: "Munya",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633613063/Pro%20Fitness/munya_bq9fd1.png"
            },
                        {
                name: "Tendai",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633613063/Pro%20Fitness/gallery_pages-1-removebg-preview_lzdgwo.png"
            },
                        {
                name: "Tendai",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633613063/Pro%20Fitness/2-1-removebg-preview_cyjtwo.png"
            },
                        {
                name: "Tendai",
                img: "https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633427113/Pro%20Fitness/_SAM2513_cmdywx.jpg"
            }
        ]
                return {
                staffMembers
            }
    }
})
</script>