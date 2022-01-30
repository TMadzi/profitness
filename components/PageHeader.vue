<template>
<!-- FIXED IMAGE -->
    <section class="hidden bg-cover relative bg-no-repeat bg-fixed md:(block bg-cover)" :class="height" :style="{ backgroundImage: `url(${img})` }">
        <div v-show="isHome" class="hidden lg:(block bg-white h-96 w-72 absolute left-8 bottom-16 p-6)">
            <h3 class="uppercase text-primary font-bold text-6xl">MAKE<span class="text-gray-600">. </span><span class="text-gray-600">IT</span>. HAPPEN<span class="text-gray-600">!</span></h3>
            <p class="text-md text-gray-700 mt-6">
               Goals are meant to be achieved, and ours is to help our members reach theirs'.
                <br><br>Leave the excuses at the door
                <br><br>Let's <span class="text-accent font-bold text-lg">MAKE IT HAPPEN!</span>
            </p>
        </div>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        img: String,
        height: String,
        isHome: Boolean
    }
})
</script>