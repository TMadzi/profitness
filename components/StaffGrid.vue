<template>
    <div class="px-32 mt-8 grid grid-cols-12 gap-8">
        <PersonImage
            v-for="item in data"
            :key="item.id"
            :data="item"
        />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        data: Array
    }
})
</script>