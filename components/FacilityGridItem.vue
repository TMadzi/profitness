<template>
        <div class="col-span-12 h-64 bg-cover relative hover:(cursor-pointer) group lg:(col-span-6 h-96 )" :style="{ backgroundImage: `url(${facilityImg})` }">
            <div class="h-full flex flex-col bg-black bg-opacity-24 justify-end group-hover:(bg-black opacity-80 justify-start pt-10 transition-all duration-300)">
                          <h2 class="text-center font-bold text-white px-2 uppercase text-3xl mb-10 group-hover:(mb-8)">{{facilityName}}</h2>
                          <div class="hidden  text-white text-center px-2 text-lg group-hover:(block) lg:(px-12)">
                            <p class="hidden mb-6  px-2 text-lg  lg:(px-12 group-hover:(block))">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam mollitia quibusdam nobis illum pariatur, omnis temporibus inventore doloremque assumenda vitae, iure aliquam ipsum quaerat dicta corrupti, nesciunt sapiente adipisci vel!</p>
                            <nuxt-link :to="link" class="py-2 w-24 mt-8 px-4 text-md bg-primary ">Learn more</nuxt-link>                            
                          </div>
            <p class="text-white text-center hidden"></p>
            </div>
        </div>
</template>
<script lang="ts">
import Vue from 'vue'
import FacilityGridItem from './../models/FacilityGridItem'

export default Vue.extend({
    props:{
        facilityImg: String,
        facilityName: String,
        link: String
    }
})
</script>