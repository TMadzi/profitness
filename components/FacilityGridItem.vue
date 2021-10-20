<template>
        <div class="col-span-6 h-96 bg-cover relative hover:(cursor-pointer) group" :style="{ backgroundImage: `url(${facilityImg})` }">
            <div class="h-full flex flex-col bg-black bg-opacity-24 justify-end group-hover:(bg-accent opacity-90 justify-start pt-10)">
                          <h2 class="text-center font-bold text-white uppercase text-3xl mb-10 group-hover:(mb-8)">{{facilityName}}</h2>
                          <div class="hidden  text-white text-center px-12 text-lg group-hover:(block)">
                            <p class="hidden mb-6  px-12 text-lg group-hover:(block)">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam mollitia quibusdam nobis illum pariatur, omnis temporibus inventore doloremque assumenda vitae, iure aliquam ipsum quaerat dicta corrupti, nesciunt sapiente adipisci vel!</p>
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