<template>
<div class="w-full ">
  <TopBanner/>
    <nav
    class="flex fixed flex-direction-row w-full  top-0  items-center justify-between px-4 h-16 bg-white text-gray-700 z-10 shadow-xl md:(px-8 top-10) lg:(px-28) 2xl:(w-3/4)"
  >
    <div class="flex flex-row  gap-x-4  items-center">
      <nuxt-link to="/" class="h-12 bg-white rounded-full md:(h-24 mt-16) ">
<img class=" h-12 md:(h-24)  " src="https://res.cloudinary.com/defmmlrqg/image/upload/v1634132894/Pro%20Fitness/pro-fitness-logo_2_xjv965-removebg-preview_uufppn.png"/>
      </nuxt-link >
      
      <img class="h-12 mt-4" src="https://res.cloudinary.com/defmmlrqg/image/upload/v1634133271/Pro%20Fitness/pro-fitness-logo_qraxhr.jpg"/>
    </div>
    <div class="flex items-center">
      <div class="flex  md:justify-between md:bg-transparent">

        <button class="" aria-label="Open Menu" @click="drawer">
<h1 class="uppercase text-primary font-bold text-xl text-center">Menu</h1>
      </button>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform bg-white top-0 z-50 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
       <div class="flex flex-col  gap-x-4  items-center">
      <div class="h-24 mt-4 bg-white rounded-full">
<img class="h-24  " src="https://res.cloudinary.com/defmmlrqg/image/upload/v1634132894/Pro%20Fitness/pro-fitness-logo_2_xjv965-removebg-preview_uufppn.png"/>
      </div>
      
      <img class="h-12" src="https://res.cloudinary.com/defmmlrqg/image/upload/v1634133271/Pro%20Fitness/pro-fitness-logo_qraxhr.jpg"/>
    </div>
      <nuxt-link class="p-4 flex font-bold text-xl text-primary transition ease duration-300 hover:(bg-primary text-white)" to="/" @click="isOpen = false">Home</nuxt-link>
      <nuxt-link class="p-4 flex font-bold text-xl text-primary transition ease duration-300 hover:(bg-primary text-white)" to="/trainers">Trainers</nuxt-link>
      <nuxt-link class="p-4 flex font-bold text-xl text-primary transition ease duration-300 hover:(bg-primary text-white)" to="/classes">Classes</nuxt-link>
 <vsa-list class="">
        <vsa-item>
          <vsa-heading >Facilities</vsa-heading>
          <vsa-content>
            <div class="text-lg font-medium text-gray-500">
            <n-link to="/facilities/weights" class="block py-4">Weight Training</n-link>
            <n-link to="/facilities/cardio" class="block py-4">Cardio Training</n-link>
            <n-link to="/facilities/functional" class="block py-4">Functional Training</n-link>
            <n-link to="/facilities/steam-sauna" class="block py-4">Steam Room &amp; Sauna</n-link>
            </div>
          </vsa-content>
        </vsa-item>
      </vsa-list>
            <nuxt-link class="p-4 flex font-bold text-xl text-primary transition ease duration-150 hover:(bg-primary text-white)" to="/staff">Staff</nuxt-link>
            <nuxt-link class="p-4 flex font-bold text-xl text-primary transition ease duration-150 hover:(bg-primary text-white)" to="/">Contact Us</nuxt-link>
      <div class="fixed bottom-0 w-full">

      </div>
    </aside>
  </nav>
</div>

</template>
<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
export default {
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
.vsa-list{
  min-width: 100%;
  border:none;
   border-bottom: none;
}
.vsa-item__trigger__icon--is-default {
    transform: scale(0.5);
}
.vsa-item__trigger{
  border:none;
  border-bottom: none;
}
.vsa-item__heading{
  background-color: white;
  color: #8d3ea4;
}
.vsa-item__trigger__content{
  color:#8d3ea4;
}
.vsa-item__trigger:focus, .vsa-item__trigger:active .vsa-item__trigger:hover, .vsa-item__trigger__content:active {
    outline: none;
    @apply bg-primary;
}

.vsa-item__trigger:hover .vsa-item__trigger__content {
    color: white !important
}
.vsa-item__trigger:focus .vsa-item__trigger__content {
    color: white !important
}
.vsa-item--is-active .vsa-item__heading, .vsa-item:not(:last-of-type) {
    border-bottom: #8d3ea4;
}
.vsa-item__content {
    margin: 0;
    padding-top:0;
}
</style>