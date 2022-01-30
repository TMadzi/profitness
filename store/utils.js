import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUtils = defineStore('utils', {
  state: () => ({
    sessions: [
      { hour: 6, min: '00', suffix: 'AM' },
      { hour: 8, min: '00', suffix: 'AM' },
      { hour: 8, min: '30', suffix: 'AM' },
      { hour: 9, min: '15', suffix: 'AM' },
      { hour: 5, min: '30', suffix: 'PM' }
    ],
    days: [
      { long: 'Monday', short: 'Mon' },
      { long: 'Tuesday', short: 'Tues' },
      { long: 'Wednesday', short: 'Wed' },
      { long: 'Thursday', short: 'Thurs' },
      { long: 'Friday', short: 'Fri' },
      { long: 'Saturday', short: 'Sat' }
    ]
  }),
  getters: {
    getClassDayFromId (state) {
      state.days.foreach(x => console.log(x))
    }
  }
})
