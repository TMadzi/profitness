<script>
import Vue from 'vue'
import { useClasses } from '~/store/classes'
import { useUtils } from '~/store/utils'
export default Vue.extend({
  data ({ $pinia }) {
    const classesStore = useClasses($pinia)
    const utilsStore = useUtils()
    const upcomingClasses = classesStore.upcomingClasses
    // const timeToInt = (time) => {
    //   const intTime = parseInt(time.slice(0, 2))
    //   return intTime

    const date = new Date()
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = date.getDay()
    const time = date.getHours()
    return {
      upcomingClasses,
      classesStore,
      utilsStore,
      today,
      time
    }
  }
})
</script>
<template>
  <section class="grid grid-cols-12">
    <div class="col-span-12  text-center px-4 flex place-items-center py-2 bg-primary h-16 md:() lg:(col-span-3 text-left h-32)">
      <h4 class="w-full text-white text-xl uppercase font-medium md:(text-3xl)">
        Upcoming classes
      </h4>
    </div>
    <UpcomingClass
      v-for="eClass in upcomingClasses"
      :key="eClass.id"
      :class-name="eClass.class"
      :day="classesStore.getClassDayById(eClass.id)"
      :start-time="classesStore.getStartTimeBySessionId(eClass.session).hour+':'+classesStore.getStartTimeBySessionId(eClass.session).min+classesStore.getStartTimeBySessionId(eClass.session).suffix"
      :end-time="(classesStore.getStartTimeBySessionId(eClass.session).hour+1)+':'+classesStore.getStartTimeBySessionId(eClass.session).min+classesStore.getStartTimeBySessionId(eClass.session).suffix"
    />
  </section>
</template>
