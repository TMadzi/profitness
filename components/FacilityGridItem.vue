<template>
        <div class="col-span-6 h-96 bg-cover relative hover:(cursor-pointer) group" :style="{ backgroundImage: `url(${facilityImg})` }">
            <div class="h-full flex flex-col justify-end group-hover:(bg-green-400)">
                          <h2 class="text-center font-bold text-white uppercase text-3xl">{{facilityName}}</h2>
            <p class="text-white text-center hidden"></p>
            </div>
        </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        facilityImg: String,
        facilityName: String
    }
})
</script>