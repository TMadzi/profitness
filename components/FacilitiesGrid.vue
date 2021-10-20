<template>
    <section class="grid grid-cols-12 px-4 py-4 lg:(px-32)">
        <FacilityGridItem 
            v-for="fac in facilities"
            :key="fac.facilityName"
            :facilityName="fac.facilityName"
            :facilityImg="fac.facImg"
            :link="fac.link"
        />
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import FacilityGridItem from './../models/FacilityGridItem'

export default {
    data(){
            const facilities = [
                {
                    facilityName: "Weights",
                    text:"Lorem",
                    link: "/facilities#weights",
                    facImg: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633427113/Pro%20Fitness/_SAM2513_cmdywx.jpg"
                },
                {
                    facilityName: "Cardio",
                    text:"Lorem",
                    link: "/facilities#cardio",
                    facImg: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633426709/Pro%20Fitness/292323_10150972309757226_650913718_n_nijuy5.jpg"
                },
                {
                    facilityName: "Functional",
                    text:"Lorem",
                    link: "/facilities#functional",
                    facImg: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633427001/Pro%20Fitness/_SAM2415_jiencj.jpg"
                },
                {
                    facilityName: "Steam Room & Sauna",
                    text:"Lorem",
                    link: "/facilities#steamsauna",
                    facImg: "https://res.cloudinary.com/defmmlrqg/image/upload/v1633426845/Pro%20Fitness/_SAM2462_em1x7l.jpg"
                }
            ]

            return {
                facilities
            }
    }
}
</script>