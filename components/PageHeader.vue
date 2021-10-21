<template>
<!-- FIXED IMAGE -->
    <section class="bg-contain bg-no-repeat bg-fixed md:(bg-cover)" :class="height" :style="{ backgroundImage: `url(${img})` }">

    </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        img: String,
        height: String
    }
})
</script>