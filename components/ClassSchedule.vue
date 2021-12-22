<template>
<div class="px-4 pb-12 lg:(px-24)">
    <div class="w-full flex flex-row text-xs lg:(text-md)">
      <th class="w-1/7 py-4 text-white bg-primary bg-opacity-75">TIME</th>
      <th 
        v-for="(day, index) in days"
        :key= index
        class="w-1/7 py-4  text-white bg-primary bg-opacity-75 uppercase lg:(hidden)">{{days[index].short}}
      </th>
      <th 
        v-for="(day, index) in days"
        :key= index
        class="w-1/7 py-4 hidden  text-white bg-primary bg-opacity-75 uppercase lg:(block)">{{days[index].long}}
      </th>
    </div>
    <div v-for="(hClass, index) in classes" :key="index" class="flex flex-row">
      <ClassBlock
        v-for="(value) in hClass"
        :key="value.id"
        :className="value.class"
        :trainer="value.trainer"
        @open-modal="value.trainer !='' ? handleClick(value.id):handleVoid()" 
      />
    </div>
  <ClassModal
    v-show="openModal"
    @close-modal="openModal = false"
    :className = selectedClass.name
  />
</div>
</template>
<script>
export default {
  data() {
    const classes=  [
                 [{id: 1, class: '06:00AM', trainer:'', desc: '', trainerImg:''},  {id: 2, class: '', trainer:'', desc: '', trainerImg:''},   {id: 3, class: '', trainer:'', desc: '', trainerImg:''},   {id: 4, class: '', trainer:'', desc: '', trainerImg:''}, {id: 5, class: '', trainer:'Lank', desc: '', trainerImg:''}, {id: 6, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 7, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},  ],
                 [{id: 9, class: '07:30AM', trainer:'', desc: '', trainerImg:''},   {id: 10, class: 'FrankT', trainer:'Lank', desc: '', trainerImg:''},   {id: 11, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},   {id: 12, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 13, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} , {id: 14, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 15, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},],
                 [{id: 17, class: '08:00AM', trainer:'', desc: '', trainerImg:''},   {id: 18, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},   {id: 19, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},   {id: 20, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 21, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} , {id: 22, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 23, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},],
                 [{id: 25, class: '09:15AM', trainer:'', desc: '', trainerImg:''},   {id: 26, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},   {id: 27, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},   {id: 28, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 29, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 30, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 31, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, ],
                 [{id: 33, class: '17:30PM', trainer:'', desc: '', trainerImg:''},   {id: 34, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},   {id: 35, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},   {id: 36, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 37, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 38, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, {id: 39, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''},]
            ]
    const selectedClass = {
      name: '',
      class:'',
      desc:'',
      img:''
    }  
    const days = [
      {long:'Monday', short:'Mon'},
      {long:'Tuesday', short:'Tues'},
      {long:'Wednesday', short:'Wed'},
      {long:'Thursday', short:'Thurs'},
      {long:'Friday', short:'Fri'},
      {long:'Saturday', short:'Sat'},
    ]
        return {
      openModal: false,
      classes, selectedClass, days
      // sixClass
    };
  },
  methods:{
    setModalContent(id){
      var x = this.classes.find( ({ sId }) => sId === id );
      this.selectedClass.class = x.class
      this.selectedClass.name = x.class
    },
    handleClick(id){
      this.setModalContent(id)
      this.openModal= true
    },
    handleVoid(){
    }

  },
  computed: {
    filteredArray() {
      return this.classes.filter(item => !!item.time);
    },
  },
}
</script>
<style scoped>
td{
    @apply border-1;
    @apply border-white;
}
</style>