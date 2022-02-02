import { defineStore } from 'pinia'
import { useUtils } from './utils'

export const useClasses = defineStore('classes', {
  state: () => ({
    classes: [
      { id: 1, class: '', trainer: '', desc: '', session: 1, trainerImg: '' },
      { id: 2, class: 'Hiit', trainer: 'Shayne', desc: '', session: 2, trainerImg: '' },
      { id: 3, class: '', trainer: '', desc: '', session: 3, trainerImg: '' },
      { id: 4, class: 'Pilates', trainer: 'Kerryn', desc: '', session: 4, trainerImg: '' },
      { id: 5, class: 'Ultra Spin', trainer: 'Lib', desc: '', session: 5, trainerImg: '' },
      { id: 6, class: '', trainer: '', desc: '', session: 1, trainerImg: '' },
      { id: 7, class: '', trainer: '', desc: '', session: 2, trainerImg: '' },
      { id: 8, class: '', trainer: '', desc: '', session: 3, trainerImg: '' },
      { id: 9, class: '', trainer: '', desc: '', session: 4, trainerImg: '' },
      { id: 10, class: 'Step', trainer: 'Tendai', desc: '', session: 5, trainerImg: '' },
      { id: 11, class: '', trainer: '', desc: '', session: 1, trainerImg: '' },
      { id: 12, class: 'Basic X-Train', trainer: 'Doug', desc: '', session: 2, trainerImg: '' },
      { id: 13, class: '', trainer: '', desc: '', session: 3, trainerImg: '' },
      { id: 14, class: '', trainer: '', desc: '', session: 4, trainerImg: '' },
      { id: 15, class: '', trainer: '', desc: '', session: 5, trainerImg: '' },
      { id: 16, class: '', trainer: '', desc: '', session: 1, trainerImg: '' },
      { id: 17, class: '', trainer: '', desc: '', session: 2, trainerImg: '' },
      { id: 18, class: '', trainer: '', desc: '', session: 3, trainerImg: '' },
      { id: 19, class: '', trainer: '', desc: '', session: 4, trainerImg: '' },
      { id: 20, class: 'Zumba', trainer: 'Zororo', desc: '', session: 5, trainerImg: '' },
      { id: 21, class: '', trainer: '', desc: '', session: 1, trainerImg: '' },
      { id: 22, class: 'Spin', trainer: 'Cathy', desc: '', session: 2, trainerImg: '' },
      { id: 23, class: 'Yoga', trainer: 'Kerryn', desc: '', session: 3, trainerImg: '' },
      { id: 24, class: '', trainer: '', desc: '', session: 4, trainerImg: '' },
      { id: 25, class: '', trainer: '', desc: '', session: 5, trainerImg: '' },
      { id: 26, class: '', trainer: '', desc: '', session: 1, trainerImg: '' },
      { id: 27, class: 'Annihilate', trainer: 'Danisa', desc: '', session: 2, trainerImg: '' },
      { id: 28, class: '', trainer: '', desc: '', session: 3, trainerImg: '' },
      { id: 29, class: 'Spin Inferno', trainer: 'Danisa', desc: '', session: 4, trainerImg: '' },
      { id: 30, class: '', trainer: '', desc: '', session: 5, trainerImg: '' }
    ]
  }),
  getters: {
    upcomingClasses (state) {
      const time = new Date().getHours()
      let timeSlot = 0
      switch (time) {
        case time < 6 :
          timeSlot = 0
          break
        case time > 6 && time < 7.5 :
          timeSlot = 1
          break
        case time > 7.5 && time < 8 :
          timeSlot = 2
          break
        case time > 8 && time < 9.25 :
          timeSlot = 3
          break
        case time > 9.25 && time < 17.5 :
          timeSlot = 4
          break
        case time > 17.5 :
          timeSlot = 5
      }
      // if (new Date().getDay() < 2) {
      return state.classes.filter(x => x.trainer !== '' && x.id >= (new Date().getDay() * 5) + timeSlot).slice(0, 3)
      // }
    }
  },
  actions: {
    getClassDayById (id) {
      if (id <= 5) {
        return 'Monday'
      } else if (id > 5 && id <= 10) {
        return 'Tuesday'
      } else if (id > 10 && id <= 15) {
        return 'Wednesday'
      } else if (id > 15 && id <= 20) {
        return 'Thursday'
      } else if (id > 20 && id <= 25) {
        return 'Friday'
      } else {
        return 'Saturday'
      }
    },
    getStartTimeBySessionId (sessionId) {
      const utilsStore = useUtils()
      const session = utilsStore.sessions[sessionId - 1]
      return session
    },
    getDaysClasses (dayIndex) {
      if (dayIndex === 0) {
        return this.classes.filter(x => x.id <= 5 && x.trainer !== '')
      } else if (dayIndex === 1) {
        return this.classes.filter(x => x.id > 5 && x.id <= 10 && x.trainer !== '')
      } else if (dayIndex === 2) {
        return this.classes.filter(x => x.id > 10 && x.id <= 15 && x.trainer !== '')
      } else if (dayIndex === 3) {
        return this.classes.filter(x => x.id > 15 && x.id <= 20 && x.trainer !== '')
      } else if (dayIndex === 4) {
        return this.classes.filter(x => x.id > 20 && x.id <= 25 && x.trainer !== '')
      } else {
        return this.classes.filter(x => x.id > 25 && x.trainer !== '')
      }
    }
  }
})
