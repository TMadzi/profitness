<template>
    <div>
      <div class="relative">
        <PageHeader class="bg-top" height="h-64 lg:(h-small-img)"  pos="bg-top" img="https://res.cloudinary.com/defmmlrqg/image/upload/v1633426824/Pro%20Fitness/_SAM2513_2_hqkrrf.jpg"/>
        <div class="bg-black absolute top-0 opacity-60 w-full h-full"></div>
        <h1 class="text-white flex  align-bottom justify-end  leading-44 absolute bottom-0 text-center font-bold text-banner tracking-wide w-full px-16">WEIGHTS</h1>
        </div>
        <section class="py-20 px-4 text-right bg-bgGrey">
          <h1 class="text-7xl font-bold">STRENGTH. TONING. POWER</h1>
          <p class="pt-4 max-w-1/2 float-right text-lg text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni saepe, sunt ullam labore facere excepturi aspernatur quidem error rerum doloremque dolorem consequatur corrupti esse. Perspiciatis dolorem ex architecto dolores eius!</p>
          <div class="clear-both"></div>
        </section>
    <section class="grid grid-cols-12">
    <div class="col-span-12 order-2 md:(col-span-6 order-1)">
      <div class="fac-img left-fac-img functional">
      </div>
     </div>
    <div class="col-span-12 px-8 order-1 md:(col-span-6 py-16 pl-20 order-2) ">
      <h1 class="text-6xl uppercase font-bold mb-12 text-gray-700"><span class="text-primary">What is</span> Weight Training<span class="text-primary">?</span></h1>
      <p class="mb-12 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate ipsa error illum hic tempora labore quae nihil eum quia atque aperiam explicabo, rerum qui odit suscipit.</p>
    </div>
  </section>
  <section class="grid grid-cols-12">
      <div class="col-span-12 px-8 order-1 md:(col-span-6 pl-8 py-16 pr-12 order-1) ">
      <h1 class="text-6xl uppercase font-bold mb-12 text-gray-700">Weight Training <span class="text-primary">Benefits</span></h1>
      <p class="mb-12 text-gray-500">Burn off those excess calories with our state of the art cardio equipment.
        
      </p>
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
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/v1633427329/Pro%20Fitness/_SAM2536_vgz0ub.jpg'); 
}
.functional{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/v1633427114/Pro%20Fitness/_SAM2428_bkzqbp.jpg'); 
}
.sauna{
background-image: url('https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633426845/Pro%20Fitness/_SAM2462_em1x7l.jpg'); 
}

</style>
