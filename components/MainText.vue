<template>
    <div class="flex flex-col gap-y-2 px-4 text-center py-8">
        <p class=" text-gray-500 text-md tracking-wide leading-loose md:(leading-loose)">{{text1}}</p>
        <p class="text-gray-500 text-md tracking-wide leading-loose md:(leading-loose)">{{text2}}</p>
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
