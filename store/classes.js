import { defineStore } from 'pinia'

export const useClasses = defineStore('classes', {
  state: () => ({
    classes: [
      { id: 1, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 2, class: 'Hiit', trainer: 'Shayne', desc: '', trainerImg: '' },
      { id: 3, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 4, class: 'Pilates', trainer: 'Kerryn', desc: '', trainerImg: '' },
      { id: 5, class: 'Ultra Spin', trainer: 'Lib', desc: '', trainerImg: '' },
      { id: 6, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 7, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 8, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 9, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 10, class: 'Fighting Fit', trainer: 'Zu', desc: '', trainerImg: '' },
      { id: 11, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 12, class: 'Basic X-Train', trainer: 'Doug', desc: '', trainerImg: '' },
      { id: 13, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 14, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 15, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 16, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 17, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 18, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 19, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 20, class: 'Zumba', trainer: 'Zororo', desc: '', trainerImg: '' },
      { id: 21, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 22, class: 'Spin', trainer: 'Cathy', desc: '', trainerImg: '' },
      { id: 23, class: 'Yoga', trainer: 'Kerryn', desc: '', trainerImg: '' },
      { id: 24, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 25, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 26, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 27, class: 'Annihilate', trainer: 'Danisa', desc: '', trainerImg: '' },
      { id: 28, class: '', trainer: '', desc: '', trainerImg: '' },
      { id: 29, class: 'Spin Inferno', trainer: 'Danisa', desc: '', trainerImg: '' },
      { id: 30, class: '', trainer: '', desc: '', trainerImg: '' }
    ]
  }),
  getters: {
    upcomingClasses (state) {
      const time = new Date().getTime()
      let timeSlot = 0
      const hourInMilli = 3600
      switch (time) {
        case time < 6 * hourInMilli:
          timeSlot = 0
          break
        case time > 6 * hourInMilli && time < 7.5 * hourInMilli:
          timeSlot = 1
          break
        case time > 7.5 * hourInMilli && time < 8 * hourInMilli:
          timeSlot = 2
          break
        case time > 8 * hourInMilli && time < 9.25 * hourInMilli:
          timeSlot = 3
          break
        case time > 9.25 * hourInMilli && time < 17.5 * hourInMilli:
          timeSlot = 4
          break
        case time > 17.5 * hourInMilli:
          timeSlot = 5
      }
      // if (new Date().getDay() < 2) {
      return state.classes.filter(x => x.trainer !== '' && x.id >= (2 * 5) + timeSlot).slice(0, 3)
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
    }
  }
})
