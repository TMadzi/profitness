<template>
  <div class="px-1 pb-12 lg:(px-24)">
    <div class="w-full hidden md:(flex flex-row) text-xs lg:(text-md)">
      <div class="w-1/7 py-4 text-white bg-primary bg-opacity-75">
        TIME
      </div>
      <div
        v-for="(day, index) in days"
        :key="index"
        class="w-1/7 py-4  text-white bg-primary bg-opacity-75 uppercase lg:(hidden)"
      >
        {{ days[index].short }}
      </div>
      <div
        v-for="(day, index) in days"
        :key="index"
        class="w-1/7 py-4 hidden  text-white bg-primary bg-opacity-75 uppercase lg:(block)"
      >
        {{ days[index].long }}
      </div>
    </div>
    <div v-for="(hClass, index) in classes" :key="hClass[index]" class="flex flex-row h-20">
      <div class="w-1/7 text-white bg-primary bg-opacity-75 flex items-center justify-center">
        {{ sessions[index] }}
      </div>
      <ClassBlock
        v-for="(value) in hClass"
        :key="value.id"
        :class-name="value.class"
        :trainer="value.trainer"
        @open-modal="handleClick(value.id)"
      />
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
import ClassBlock2 from './ClassBlock2.vue'
export default {
  components: { ClassBlock2 },
  data () {
    const classes = [
      [{ id: 2, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 3, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 4, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 5, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 6, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 7, class: '', trainer: '', desc: '', trainerImg: '' }],
      [{ id: 10, class: 'Hiit', trainer: 'Shayne', desc: 'Feel the Birn', trainerImg: '' }, { id: 11, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 12, class: 'Basic X-Train', trainer: 'Doug', desc: '', trainerImg: '' }, { id: 13, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 14, class: 'Spin', trainer: 'Cathy', desc: '', trainerImg: '' }, { id: 15, class: 'Annihilate', trainer: 'Danisa', desc: '', trainerImg: '' }],
      [{ id: 18, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 19, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 20, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 21, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 22, class: 'Yoga', trainer: 'Kerryn', desc: '', trainerImg: '' }, { id: 23, class: '', trainer: '', desc: '', trainerImg: '' }],
      [{ id: 26, class: 'Pilates', trainer: 'Kerryn', desc: '', trainerImg: '' }, { id: 27, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 28, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 29, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 30, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 31, class: 'Spin Inferno', trainer: 'Danisa', desc: '', trainerImg: '' }],
      [{ id: 34, class: 'Ultra Spin', trainer: 'Lib', desc: '', trainerImg: '' }, { id: 35, class: 'Fighting Fit', trainer: 'Zu', desc: '', trainerImg: '' }, { id: 36, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 37, class: 'Zumba', trainer: 'Zororo', desc: '', trainerImg: '' }, { id: 38, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 39, class: '', trainer: '', desc: '', trainerImg: '' }]
    ]
    const selectedClass = {
      name: '',
      instructor: '',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a',
      img: ''
    }
    const sessions = [
      '06:00AM',
      '07:30AM',
      '08:00AM',
      '09:15AM',
      '17:30PM'
    ]
    const days = [
      { long: 'Monday', short: 'Mon' },
      { long: 'Tuesday', short: 'Tues' },
      { long: 'Wednesday', short: 'Wed' },
      { long: 'Thursday', short: 'Thurs' },
      { long: 'Friday', short: 'Fri' },
      { long: 'Saturday', short: 'Sat' }
    ]
    return {
      openModal: false,
      classes,
      selectedClass,
      days,
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
        element.forEach((item) => {
          if (item.id === id) {
            this.selectedClass.name = item.class
            this.selectedClass.instructor = item.trainer
            // this.selectedClass.desc = item.desc
          }
        })
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
td{
    @apply border-1;
    @apply border-white;
}
</style>
