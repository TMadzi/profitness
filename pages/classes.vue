<script>
export default {
}
</script>
<template>
  <div>
    <div class="relative">
      <video class="mt-12" width="100%" height="240" autoplay loop muted>
        <source src="https://res.cloudinary.com/defmmlrqg/video/upload/q_auto:low/v1636655940/Pro%20Fitness/Profitness_Videosmall_rliwh0.mp4" type="video/mp4">
        Your browser does not support the video tag.

      </video>
      <div class="bg-black absolute top-0 opacity-60 w-full h-full flex flex-col items-center justify-center text-center">
        <h1 class="relative text-white z-50 opacity-100 align-bottom justify-center  text-5xl font-bold w-2/4 sm:(w-3/4 text-8xl) md:(  px-16) lg:(text-9xl w-3/4) tracking-wide w-full uppercase">
          More Than A Workout
        </h1>
        <span class="block text-white mt-4 text-xl md:(text-4xl mt-8)">Our classes are guaranteed to make you sweat</span>
      </div>
    </div>
    <MainText
      class="col-span-6 pt-12 px-8 lg:(px-32)"
      text1="Our expert instructors offer a wide variety of classes suitable for all ages and fitness levels."
      text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"
    />
    <SectionTitle
      id="schedule"
      class=""
      text1="Class"
      text2="Schedule"
      size="text-4xl"
      color2="text-primary"
      color1="text-gray-700"
    />
    <ClassSchedule class="mt-8" />
  </div>
</template>
