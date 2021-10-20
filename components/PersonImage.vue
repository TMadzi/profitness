<template>
    <div class="col-span-6 flex flex-col gap-y-4 justify-center mx-auto md:(col-span-3)">
        <img class="rounded-full" :src="data.img"/>
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