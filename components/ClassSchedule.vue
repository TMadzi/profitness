<template>
  <div class="px-1 pb-12 lg:(px-24)">
    <div class="w-full hidden md:(flex flex-row)text-xs lg:(text-md)">
      <th class="w-1/7 py-4 text-white bg-primary bg-opacity-75">
        TIME
      </th>
      <th
        v-for="(day, index) in days"
        :key="index"
        class="w-1/7 py-4  text-white bg-primary bg-opacity-75 uppercase lg:(hidden)"
      >
        {{ days[index].short }}
      </th>
      <th
        v-for="(day, index) in days"
        :key="index"
        class="w-1/7 py-4 hidden  text-white bg-primary bg-opacity-75 uppercase lg:(block)"
      >
        {{ days[index].long }}
      </th>
    </div>
    <div v-for="(hClass, index) in classes" :key="hClass[index]" class="flex flex-row">
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
      [{ id: 2, class: 'Move', trainer: 'Me', desc: '', trainerImg: '' }, { id: 3, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 4, class: '', trainer: '', desc: '', trainerImg: '' }, { id: 5, class: '', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 6, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 7, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }],
      [{ id: 10, class: 'Frank T', trainer: 'Lank', desc: 'Feel the Birn', trainerImg: '' }, { id: 11, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 12, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 13, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 14, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 15, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }],
      [{ id: 18, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 19, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 20, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 21, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 22, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 23, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }],
      [{ id: 26, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 27, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 28, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 29, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 30, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 31, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }],
      [{ id: 34, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 35, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 36, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 37, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 38, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }, { id: 39, class: 'Frank', trainer: 'Lank', desc: '', trainerImg: '' }]
    ]
    const classes2 = [
      { id: 1, day: 1, time: 3, class: '06:00AM', trainer: 'a', desc: 's', trainerImg: '' },
      { id: 2, day: 2, time: 2, class: '06:00AM', trainer: 'b', desc: 'd', trainerImg: '' },
      { id: 3, day: 3, time: 3, class: '07:00AM', trainer: 'c', desc: 'f', trainerImg: '' },
      { id: 4, day: 2, time: 4, class: '06:00AM', trainer: 'd', desc: 'y', trainerImg: '' },
      { id: 5, day: 3, time: 3, class: '06:00AM', trainer: 'e', desc: 'j', trainerImg: '' }
    ]
    const selectedClass = {
      name: '',
      instructor: '',
      desc: '',
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
      classes2,
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
            this.selectedClass.desc = item.desc
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
