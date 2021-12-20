<template>
    <section class="grid grid-cols-12">
        <div class="col-span-12  text-center px-4 flex place-items-center py-2 bg-primary h-16 md:() lg:(col-span-3 text-left h-32)">
            <h4 class="w-full text-white text-xl uppercase font-medium md:(text-3xl)">Upcoming classes</h4>
        </div>
            <UpcomingClass
                v-for="eClass in shownClasses"
                :key="eClass.id"
                :className="eClass.className"
                :day="eClass.day"
                :startTime="eClass.startTime"
                :endTime="eClass.endTime"
                :link="eClass.link"
            />
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        const upcomingClasses = [
            {
                id: 1,
                className: "Annihilate",
                day: "Wednesday",
                startTime: "09:00",
                endTime: "10:00",
                link: "/classes/#annihilate"
            },
            {
                id: 2,
                className: "Storo",
                day: "Friday",
                startTime: "17:00",
                endTime: "18:00",
                link: "/classes/#annihilate"
            },
            {
                id: 3,
                className: "Powers Run",
                day: "Saturday",
                startTime: "09:00",
                endTime: "10:00",
                link: "/classes/#annihilate"
            },
            {
                id: 4,
                className: "Check",
                day: "Thursday",
                startTime: "09:00",
                endTime: "10:00",
                link: "/classes/#annihilate"
            },
            {
                id: 5,
                className: "Storo",
                day: "Saturday",
                startTime: "17:00",
                endTime: "18:00",
                link: "/classes/#annihilate"
            },
            {
                id: 6,
                className: "Power Runs",
                day: "Saturday",
                startTime: "09:00",
                endTime: "10:00",
                link: "/classes/#annihilate"
            },
        ]
        const timeToInt = (time: String) =>{
            let intTime = parseInt(time.slice(0,2))
            return intTime
        }

        const date = new Date()
        const daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const today = date.getDay()
        const time = date.getHours()
        const shownClasses = upcomingClasses.filter(x=> daysArray.indexOf(x.day) >= today)
            .sort((a,b)=> {
                 if (daysArray.indexOf(a.day) === daysArray.indexOf(b.day)){
                    return timeToInt(a.startTime) < timeToInt(b.startTime) ? -1 : 1
                } else {
                    return daysArray.indexOf(a.day) < daysArray.indexOf(b.day) ? -1 : 1
                }
                })
            .slice(0,3)
            return {
                shownClasses,
                upcomingClasses,
                today,
                time
        }
    }
})
</script>