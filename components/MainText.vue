<template>
    <div class="flex flex-col gap-y-2 px-4 text-center py-8">
        <p class=" text-gray-700 text-md tracking-wider leading-loose">{{text1}}</p>
        <p class="text-gray-700 text-md tracking-wider leading-loose">{{text2}}</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        text1: String,
        text2: String
    }
})
</script>
