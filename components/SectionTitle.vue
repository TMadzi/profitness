<template>
    <h1 class="px-32 uppercase font-black pt-16 pb-8 text-6xl" :class="color2" >
        {{text1}} <span :class="color1">{{text2}}</span>
    </h1>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        text1: String,
        text2: String,
        size: String,
        color1: String,
        color2: String
    }
})
</script>