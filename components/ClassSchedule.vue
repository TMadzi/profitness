<template>
<div class="px-32 pb-12">
    <div class="w-full flex flex-row">
      <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">TIME</th>
      <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">MONDAY</th>
      <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">TUESDAY</th>
      <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">WEDNESDAY</th>
      <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">THURSDAY</th>
    <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">FRIDAY</th>
      <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">SATURDAY</th>
      <th class="w-1/8 py-4 text-white bg-primary bg-opacity-75">SUNDAY</th>
    </div>
    <div v-for="(hClass, index) in classes" :key="index" class="flex flex-row">
      <ClassBlock
        v-for="(value) in hClass"
        :key="value.id"
        :className="value.class"
        :instructor="value.trainer"
        @open-modal="handleClick(value.id)" 
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
                { mon: {id: 1, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 2, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 3, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 4, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, fri:  {id: 5, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 6, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 7, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}},
                { mon:  {id: 8, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 9, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 10, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 11, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} , fri:  {id: 12, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 13, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 14, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}},
                { mon:  {id: 15, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 16, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 17, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 18, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} , fri:  {id: 19, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 20, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 21, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}},
                { mon:  {id: 22, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 23, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 24, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 25, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, fri:  {id: 26, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 27, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 28, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} }
            ]
    const classes2=  [
      { mon: {id: 1, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 2, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 3, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 4, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, fri:  {id: 5, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 6, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 7, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}},
      { mon:  {id: 8, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 9, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 10, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 11, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} , fri:  {id: 12, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 13, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 14, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}},
      { mon:  {id: 15, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 16, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 17, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 18, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} , fri:  {id: 19, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 20, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 21, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}},
      { mon:  {id: 22, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, tues:  {id: 23, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, wed:  {id: 24, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, thurs:  {id: 25, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, fri:  {id: 26, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sat:  {id: 27, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''}, sun:  {id: 28, class: 'Frank', trainer:'Lank', desc: '', trainerImg:''} }
    ]
    const selectedClass = {
      name: '',
      class:'',
      desc:'',
      img:''
    }
      
        
          
        return {
      openModal: false,
      classes, selectedClass
      // sixClass
    };
  },
  methods:{
    setModalContent(id){
      this.selectedClass.class = this.classes.find( ({ sId }) => sId === id );
    },
    handleClick(id){
      console.log(id)
      this.openModal= true
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