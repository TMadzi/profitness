<template>
  <div class="">
    <PageHeader class="header-img" height="h-96 bg-right hidden  lg:(block h-home-img bg-right-top)" is-home img="https://www.samlevysvillage.com/wp-content/uploads/2015/09/Pro-fitness-Health-Club-1.jpg" />
    <img src="https://www.samlevysvillage.com/wp-content/uploads/2015/09/Pro-fitness-Health-Club-1.jpg" alt="Profitness Outside" class="mt-12 md:(hidden)">
    <UpcomingClasses />
    <SectionTitle
      class="mt-4 px-8"
      text1="Our"
      text2="Facilities"
      size="text-7xl"
      color1="text-primary"
      color2="text-gray-700"
    />
    <MainText
      class="px-8 pb-4 lg:(px-32 py-12)"
      text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
      text2=""
    />
    <section class="grid grid-cols-12 mb-4">
      <div class="col-span-12 order-2 md:(col-span-6 order-1)">
        <div class="fac-img left-fac-img weights" />
      </div>
      <div class="col-span-12 px-8 order-1 pb-12 text-center  md:(col-span-6 text-left py-16 pl-20 order-2)  weight-text">
        <h1 class=" text-4xl mt-4 mb-4 text-center md:(text-6xl mb-12 text-left) uppercase font-bold  text-gray-700">
          Weight <span class="text-primary">Training</span>.
        </h1>
        <p class="mb-12 text-gray-500 text-md tracking-wide leading-loose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate ipsa error illum hic tempora labore quae nihil eum quia atque aperiam explicabo, rerum qui odit suscipit.
        </p>
        <nuxt-link to="/facilities/weights" class="py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ">
          Learn more
        </nuxt-link>
      </div>
    </section>
    <section class="grid grid-cols-12 mb-4">
      <div class="col-span-12 px-8 order-1 pb-12 text-center md:(col-span-6 text-left  pl-8 py-16 pr-12 order-1 ) cardio-text">
        <h1 class=" text-4xl mt-4 mb-4 text-center md:(text-6xl mb-12 text-left) uppercase font-bold  text-gray-700">
          Cardio<span class="text-primary">.</span>
        </h1>
        <p class="mb-12 text-gray-500 text-md tracking-wide leading-loose">
          Burn off those excess calories with our state of the art cardio equipment.
        </p>
        <nuxt-link to="/facilities/cardio" class="py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ">
          Learn more
        </nuxt-link>
      </div>
      <div class="col-span-12 order-2 md:(col-span-6 order-2)">
        <div class="fac-img right-fac-img cardio" />
      </div>
    </section>
    <section class="grid grid-cols-12 mb-4">
      <div class="col-span-12 order-2  md:(col-span-6 order-1)">
        <div class="fac-img left-fac-img functional" />
      </div>
      <div class="col-span-12 px-8 order-1 pb-12 text-center functional-text md:(col-span-6 text-left py-16 pl-20 order-2 ) ">
        <h1 class=" text-4xl mt-4 mb-4 text-center md:(text-6xl mb-12 text-left) uppercase font-bold  text-gray-700">
          <span class="text-primary">Functional</span> Training<span class="text-primary">.</span>
        </h1>
        <p class="mb-12 text-gray-500 text-md tracking-wide leading-loose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate ipsa error illum hic tempora labore quae nihil eum quia atque aperiam explicabo, rerum qui odit suscipit.
        </p>
        <nuxt-link to="/facilities/functional" class="py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ">
          Learn more
        </nuxt-link>
      </div>
    </section>
    <section class="grid grid-cols-12">
      <div class="col-span-12 px-8 order-1 pb-12 text-center  steam-text md:(col-span-6 text-left  pl-8 py-16 pr-12) ">
        <h1 class=" text-4xl mt-4 mb-4 text-center md:(text-6xl mb-12 text-left) uppercase font-bold  text-gray-700">
          Sauna <span class="text-primary">&amp;</span> Steam Room<span class="text-primary">.</span>
        </h1>
        <p class="mb-12 text-gray-500 text-md tracking-wide leading-loose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate ipsa error illum hic tempora labore quae nihil eum quia atque aperiam explicabo, rerum qui odit suscipit.
        </p>
        <nuxt-link to="/facilities/steam-sauna" class="py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ">
          Learn more
        </nuxt-link>
      </div>
      <div class="col-span-12 order-2 md:(col-span-6)">
        <div class="fac-img right-fac-img sauna" />
      </div>
    </section>
    <SectionTitle
      class="mt-4"
      text1="Our"
      text2="Classes"
      size="text-7xl"
      color1="text-gray-700"
      color2="text-primary"
    />
    <MainText
      class=" lg:(px-32 px-8 pt-4 pb-12)"
      text1="We have a variety of classes available no matter what your health and fitness goals are. View our schedule to find out more!"
      text2=""
    />
    <section class="grid grid-cols-12 mb-4 px-4  gap-y-8 lg:(px-32 pb-8) text-center">
      <div class="col-span-12 w-2/3 mx-auto md:(w-full col-span-4  h-64)">
        <h4 class="text-primary font-medium text-3xl uppercase">
          Aerobics
        </h4>

        <img src="https://res.cloudinary.com/defmmlrqg/image/upload/v1636973667/Pro%20Fitness/icons/squats-100_bumc6s.png" class="mx-auto w-12 my-4" alt="">
        <p class="mb-4 lg:(mb-12) text-gray-500">
          Break a sweat in one of our many aerobics studio classes.
        </p>
      </div>
      <div class="col-span-12 w-2/3 mx-auto md:(w-full col-span-4 h-64)">
        <h4 class="text-primary font-medium text-3xl uppercase">
          Spin
        </h4>

        <img src="https://res.cloudinary.com/defmmlrqg/image/upload/v1636973667/Pro%20Fitness/icons/spinning-100_qznfpk.png" class="mx-auto w-12 my-4" alt="">
        <p class="mb-4 lg:(mb-12) text-gray-500">
          Hop on a bike and ride yourself into the best shape of your life.
        </p>
      </div>
      <div
        class="col-span-12 w-2/3 mx-auto md:(w-full col-span-4 h-64)
     "
      >
        <h4 class="text-primary font-medium text-3xl uppercase">
          Yoga &amp; Pilates
        </h4>
        <img src="https://res.cloudinary.com/defmmlrqg/image/upload/v1636973668/Pro%20Fitness/icons/yoga-100_xjfyrf.png" class="mx-auto w-12 my-4" alt="">
        <p class="mb-4 lg:(mb-12) text-gray-500">
          Enjoy peace and relaxation through yoga, or improve strngth and flexibility in pilates.
        </p>
      </div>
    </section>
    <section class="text-center">
      <nuxt-link to="/classes" class="py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ">
        view schedule
      </nuxt-link>
    </section>
    <Pricing />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.header-img', { opacity: 0, y: -200 }, { opacity: 1, y: 0, duration: 2 })
    gsap.to('.weight-text', {
      scrollTrigger: {
        trigger: '.weight-text',
        start: 'top center',
        toggleActions: 'play pause pause pause'
      },
      opacity: 1,
      duration: 1
    })
    gsap.to('.cardio-text', {
      scrollTrigger: {
        trigger: '.cardio-text',
        start: 'top center',
        toggleActions: 'play pause pause pause'
      },
      opacity: 1,
      duration: 1
    })
    gsap.to('.functional-text', {
      scrollTrigger: {
        trigger: '.functional-text',
        start: 'top center',
        toggleActions: 'play pause pause pause'
      },
      opacity: 1,
      duration: 1
    })
    gsap.to('.steam-text', {
      scrollTrigger: {
        trigger: '.steam-text',
        start: 'top center',
        toggleActions: 'play pause pause pause'
      },
      opacity: 1,
      duration: 1
    })
    gsap.to('.weights', {
      scrollTrigger: {
        trigger: '.weights',
        start: 'top center',
        toggleActions: 'restart pause pause pause'
      },
      opacity: 1,
      x: 0
    })
    gsap.to('.functional', {
      scrollTrigger: {
        trigger: '.functional',
        start: 'top center',
        toggleActions: 'restart pause pause pause'
      },
      opacity: 1,
      x: 0
    })
    gsap.to('.cardio', {
      scrollTrigger: {
        trigger: '.cardio',
        start: 'top center',
        toggleActions: 'restart pause pause pause'
      },
      opacity: 1,
      x: 0
    })
    gsap.to('.sauna', {
      scrollTrigger: {
        trigger: '.sauna',
        start: 'top center',
        toggleActions: 'restart pause pause pause'
      },
      opacity: 1,
      x: 0
    })
  }
})
</script>
<style scoped>
body{
  background: #F8F8F8;
}
  .feature-img{
    width:450px;
  }
  .feature-img-l{
    width:500px;
  }

    .feature-img-right{
    padding: 10px;
    width:300px;
    background: white;
    top: -120px;
    right: 20px;
  }

  .full-btn{
    width:100%;
  }
  .fac-img {
    width: 100%;
    height:400px;
    margin:0px;
    background-repeat: no-repeat;

}
.weights{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633427113/Pro%20Fitness/_SAM2513_cmdywx.jpg');
}
.weight-text, .cardio-text, .functional-text, .steam-text{
opacity: 0;
}
.cardio{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633426709/Pro%20Fitness/292323_10150972309757226_650913718_n_nijuy5.jpg');
}
.functional{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633427001/Pro%20Fitness/_SAM2415_jiencj.jpg');
}
.sauna{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633426845/Pro%20Fitness/_SAM2462_em1x7l.jpg');
}

@media only screen and (min-width: 600px)  {
  .left-fac-img {
    transform: perspective(200px) rotateX(-3deg) translateX(-300px);
    overflow: hidden;
    transform-origin: left center;
}
  .right-fac-img {
    transform: perspective(200px) rotateX(-3deg)  translateX(300px);
    overflow: hidden;
    transform-origin: right center;
}

}
</style>
