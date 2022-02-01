<template>
    <div>
      <div class="relative">
        <PageHeader class="bg-top" height="h-72 lg:(h-small-img)"  pos="bg-top" img="https://res.cloudinary.com/defmmlrqg/image/upload/v1633426709/Pro%20Fitness/292323_10150972309757226_650913718_n_nijuy5.jpg"/>
             <div class="bg-black absolute top-0 opacity-60 w-full h-full flex flex-col items-center justify-center">
            <h1 class="relative text-white flex  align-bottom justify-center  text-8xl  text-center font-bold md:(text-9xl leading-44 px-16 justify-center) tracking-wide w-full opacity-90">CARDIO</h1>
             </div>
        </div>
        <section class=" px-4 text-center py-12 md:(py-20 text-right) bg-bgGrey">
          <h1 class="text-5xl md:(text-7xl) font-bold text-gray-700"><span class="text-primary">SPEED.</span> ENDURANCE. <span class="text-primary">FITNESS.</span></h1>
          <p class="pt-4  md:(max-w-1/2 float-right) text-lg text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni saepe, sunt ullam labore facere excepturi aspernatur quidem error rerum doloremque dolorem consequatur corrupti esse. Perspiciatis dolorem ex architecto dolores eius!</p>
          <div class="clear-both"></div>
        </section>
    <section class="grid grid-cols-12">
    <div class="col-span-12 order-2 md:(col-span-6 order-1)">
      <div class="fac-img left-fac-img functional">
      </div>
     </div>
    <div class="col-span-12 px-8 py-12 text-center order-1 md:(col-span-6 py-4 px-8 order-2) lg:(py-16 px-4) ">
      <h1 class="text-5xl uppercase font-bold mb-8 text-gray-700"><span class="text-primary">What is</span> CARDIO<span class="text-primary">?</span></h1>
      <p class="mb-6 text-gray-500 text-lg">CARDIO uses weights as a form of resistance to help make your muscles stronger. You can perform CARDIO using free weights (dumbbells, barbells and kettlebells) or by using machines.</p>
      <p class="text-gray-500 text-lg md:(mb-12)">When doing CARDIO, it is important that you use proper form and technique. We suggest that new/novice gym memebers schedule a session with a <nuxt-link to="/trainers" class="font-bold text-primary">personal trainer</nuxt-link> so that they can lerarn correct form and prevent serious injury.</p>
    </div>
  </section>
  <section class="grid grid-cols-12">
      <div class="col-span-12 px-8 py-12 order-1 md:(col-span-6 pl-8 py-4 pr-12 order-1) lg:(py-16) ">
      <h1 class="text-5xl text-center uppercase font-bold mb-8 text-gray-700">CARDIO <span class="text-primary">Benefits</span></h1>
      <p class="my-4 text-gray-500 text-lg flex flex-row gap-x-4 items-center"><span class="text-5xl font-bold text-accent">1.</span>Get stronger and make daily tasks (walking, carrying kids or grocieries) much easier.</p>
      <p class="my-4 text-gray-500 text-lg flex flex-row gap-x-4 items-center"><span class="text-5xl font-bold text-accent">2.</span> As you gain muscle and lose body fat, you will have a leaner appearance</p>
      <p class="my-4 text-gray-500 text-lg flex flex-row gap-x-4 items-center"><span class="text-5xl font-bold text-accent">3.</span> Burn off those excess calories with our state of the art cardio equipment</p>
      <p class="my-4 text-gray-500 text-lg flex flex-row gap-x-4 items-center"><span class="text-5xl font-bold text-accent">4.</span> Burn off those excess calories with our state of the art cardio equipment</p>
    </div>
    <div class="col-span-12 order-2 md:(col-span-6 order-2)">
      <div class="fac-img right-fac-img cardio">
      </div>
     </div>
  </section>
    </div>
</template>
<style scoped>
.feature-img-l{
    width:500px;
  }

    .feature-img-right{
    padding: 10px;
    width:300px;
    background: white;
    position: absolute;
    top: 0;
    right: 20px;
  }

  .full-btn{
    width:100%;
  }
  .fac-img {
    width: 100%;
    height:500px;
    margin:0px;
    background-repeat: no-repeat;
    background-size: cover;
    
}
.cardio{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/v1639984108/Pro%20Fitness/treadmill-3_fql0dk.jpg'); 
}
.functional{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/v1633427114/Pro%20Fitness/_SAM2428_bkzqbp.jpg'); 
}
.sauna{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633426845/Pro%20Fitness/_SAM2462_em1x7l.jpg'); 
}

</style>
