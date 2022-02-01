<template>
    <div class=" relative shadow-xs p-2 col-span-6 flex flex-col gap-y-4 justify-center mx-auto md:(col-span-3) hover:( cursor-pointer transition duration-300)">
        <img class="h-48 md:(h-64)" :src="data.img"/>
        <h4 class="uppercase text-center text-bold text-primary text-xl">{{data.name}}</h4>
    </div>
</template> 
<script lang="ts">
import Vue from 'vue'
import TeamMember from '../models/TeamMember'
export default Vue.extend({
    props:{
        data: Array,
    }
})
</script>
