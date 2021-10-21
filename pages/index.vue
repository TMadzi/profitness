<template>
  <div class="">
  <PageHeader height="h-64 lg:(h-home-img)" img="https://www.samlevysvillage.com/wp-content/uploads/2015/09/Pro-fitness-Health-Club-1.jpg"/>
  <UpcomingClasses/>
  <SectionTitle class="mt-8" text1="Pro Fitness" text2="Health Club"  size="text-4xl" color2="text-primary" color1="text-gray-700" />
  <div class="grid grid-cols-12 px-4 lg:(px-32)">
    <MainText class="col-span-12 pt-4 md:(col-span-6 pt-12)"
        text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
        text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
      />
   <div class="col-span-12 md:(col-span-6 pt-24)">
     <div class="grid grid-cols-1 md:grid-cols-2 relative md:block" data-v-0fa6ba11="">
      <img src="https://res.cloudinary.com/defmmlrqg/image/upload/v1633427425/Pro%20Fitness/_SAM2431_v7xo6p.jpg" alt="Sunset in the mountains" class="feature-img" data-v-0fa6ba11=""> 
      <img src="https://res.cloudinary.com/defmmlrqg/image/upload/v1633426863/Pro%20Fitness/_SAM2563_ogg2r5.jpg" alt="Sunset in the mountains" class="lg:(p-2 w-64 bg-white absolute left-12 top-64)" data-v-0fa6ba11="">
      <img src="https://res.cloudinary.com/defmmlrqg/image/upload/v1633427081/Pro%20Fitness/_SAM2436_rdzncw.jpg" alt="Sunset in the mountains" class="lg:(p-2 bg-white absolute w-72 right-5 -top-28)" data-v-0fa6ba11="">
     </div>
   </div>
  </div>
  <SectionTitle class="mt-16" text1="Our" text2="Facilities"  size="text-4xl" color1="text-primary" color2="text-gray-700" />
   <MainText class="px-4 pt-4 pb-12 lg:(px-32)"
    text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
    text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
   />
  <FacilitiesGrid class="mb-16"/>
  <Pricing />
  
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style scoped>
body{
  background: #F8F8F8;
}
  .feature-img{
    width:450px;
  }
  .feature-img-l{
    width:500px;
  }

    .feature-img-right{
    padding: 10px;
    width:300px;
    background: white;
    position: absolute;
    top: -120px;
    right: 20px;
  }

  .full-btn{
    width:100%;
  }
</style>

