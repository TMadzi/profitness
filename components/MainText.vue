<template>
    <div>
        <p class=" px-32 text-gray-700 text-lg tracking-wider leading-loose">{{text1}}</p>
        <p class="px-32 text-gray-700 text-lg tracking-wider leading-loose">{{text2}}</p>
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
