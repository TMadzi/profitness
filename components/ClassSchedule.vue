<template>
  <div class="px-1  lg:(px-24 pb-12)">
    <!-- Mobile -->
    <div v-for="(day, index) in days" :key="index" class="flex flex-col text-center py-4 even:bg-bgGrey last:pb-8 md:(hidden)">
      <h2 class="text-3xl text-center font-bold uppercase text-primary mt-2">
        {{ day.long }}
      </h2>
      <div v-for="eClass in classesStore.getDaysClasses(index)" :key="eClass.id" class=" text-gray-700 tracking-wide  pb-4 px-8 border-b border-gray-1  00 last:border-none">
        <h4 class="mt-3">{{classesStore.getStartTimeBySessionId(eClass.session).hour+':'+classesStore.getStartTimeBySessionId(eClass.session).min+classesStore.getStartTimeBySessionId(eClass.session).suffix}}</h4>
        <h3 class="text-2xl uppercase font-medium">
          {{ eClass.class }}
        </h3>
        <h4 class="text-md">
          with {{ eClass.trainer }}
        </h4>
        <!-- <p class="text-sm mt-4">{{ eClass.desc }}</p> -->
        <p class="text-sm mt-4 pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam corrupti consectetur quibusdam porro nostrum ex! Nihil illum ea sapiente dolorum iste provident laborum maxime maiores iusto vel. Ducimus, sint.
        </p>
      </div>
    </div>
    <!-- Desktop -->
    <div class=" hidden md:(flex flex-row)">
      <div class="w-1/7 text-center md:(flex flex-col) text-xs lg:(text-lg)">
        <div class="w-full py-4 text-white bg-primary bg-opacity-75">
          TIME
        </div>
        <div v-for="x in numbers" :key="x" class="w-full h-20 text-white text-lg bg-primary bg-opacity-75 flex items-center justify-center">
          {{ sessions[x].hour + ':' +sessions[x].min + sessions[x].suffix }}
        </div>
      </div>
      <div
        v-for="(day, index) in days"
        :key="index"
        class="w-1/7 flex-flex-col  text-white bg-primary bg-opacity-75 uppercase"
      >
        <div class="py-3 text-center">
          {{ days[index].short }}
        </div>
        <ClassBlock
          v-for="value in classes.slice(index * 5,index * 5 + 5)"
          :key="value.id"
          :class-name="value.class"
          :trainer="value.trainer"
          @open-modal="handleClick(value.id)"
        />
      </div>
    </div>
    <ClassModal
      v-show="openModal"
      :class-name="selectedClass.name"
      :class-desc="selectedClass.desc"
      :instructor="selectedClass.instructor"
      @close-modal="openModal = false"
    />
  </div>
</template>
<script>
import { useClasses } from '~/store/classes'
import { useUtils } from '~/store/utils'

export default {
  data ({ $pinia }) {
    const classesStore = useClasses($pinia)
    const utilsStore = useUtils($pinia)
    const classes = classesStore.classes
    const selectedClass = {
      name: '',
      instructor: '',
      desc: '',
      img: ''
    }
    const numbers = [0, 1, 2, 3, 4]
    const sessions = utilsStore.sessions
    const days = utilsStore.days
    return {
      openModal: false,
      classes,
      selectedClass,
      days,
      classesStore,
      numbers,
      sessions
      // sixClass
    }
  },
  computed: {
    filteredArray () {
      return this.classes.filter(item => !!item.time)
    }
  },
  methods: {
    currentClass (id) {
      return this.classes.forEach((element) => {
        if (element.id === id) {
          this.selectedClass.name = element.class
          this.selectedClass.instructor = element.trainer
          this.selectedClass.desc = element.desc
        }
      })
    },
    handleClick (id) {
      const x = this.currentClass(id)
      if (this.selectedClass.name === '') {
        this.openModal = false
      } else { this.openModal = true }
    },
    handleVoid (id) {
      console.log(id)
      this.openModal = true
    }
  }
}
</script>
<style scoped>
</style>
