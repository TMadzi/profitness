<template>
    <div 
        class="text-center w-1/8  py-8 border-6 border-white text-gray-700 flex flex-col gap-2 justify-center bg-purple-200 hover:(cursor-pointer bg-purple-300 transition-all duration-200)"
        @click="$emit('open-modal')"
    >
        <p class="font-bold uppercase text-gray-600">{{instructor}}</p>
        <p class="uppercase text-gray-500">{{className}}</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import FacilityGridItem from './../models/FacilityGridItem'

export default Vue.extend({
    props:{
        id: Number,
        className: String,
        instructor: String
    }
})
</script>