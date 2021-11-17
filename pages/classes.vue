<template>
    <div>
        <div class="relative">
<video width="100%" height="240" autoplay loop muted>
  <source src="https://res.cloudinary.com/defmmlrqg/video/upload/q_auto:low/v1636655940/Pro%20Fitness/Profitness_Videosmall_rliwh0.mp4" type="video/mp4">
Your browser does not support the video tag.

</video>
<div class="bg-black absolute top-0 opacity-60 w-full h-full"></div>
<h1 class="text-white flex justify-end  absolute bottom-0 text-center font-bold text-banner tracking-wide w-full px-16">CLASSES</h1>
        </div>
         <MainText class="col-span-6 pt-12 px-32"
    text1="Our expert instructors offer a wide variety of classes suitable for all ages and fitness levels."
    text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
   />
   <SectionTitle id="schedule" class="mt-2" text1="Class" text2="Schedule"  size="text-4xl" color2="text-primary" color1="text-gray-700" />
        <ClassSchedule class="mt-12"/>
    </div>
</template>