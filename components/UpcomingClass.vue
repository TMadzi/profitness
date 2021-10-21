<template>
    <div class="col-span-4 px-4 py-2 flex flex-col place-content-center bg-gray-100 h-32 group hover:(cursor-pointer bg-primary) lg:(col-span-3)">
        <h4 class="font-medium text-md uppercase text-gray-600 transition duration-300 ease group-hover:(text-white ) md:(text-2xl)">{{className}}</h4>
        <h6 class="text-sm text-gray-500 group-hover:(text-white opacity-80) md:(text-lg)">{{startTime}} - {{endTime}}, {{day}}</h6>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TeamMember from '../models/TeamMember'
export default Vue.extend({
    props:{
        className: String,
        day: String,
        startTime: String,
        endTime:String,
        link: String
    }
})
</script>