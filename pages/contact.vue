<template>
  <div class="mt-24">
    <div class="px-4 py-8 text-center">
      <h1 class="text-primary font-bold text-5xl uppercase">
        Contact Us
      </h1>
      <div class="mt-12">
        <form action="#" method="POST" class="grid grid-cols-1 px-8 text-center gap-y-4 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <div class="mt-1">
              <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="py-3 px-4 block w-full border-b  border-primary rounded-md">
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
            <div class="mt-1">
              <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="py-3 px-4 block w-full border-b  border-primary rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full border-b  border-primary rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="mt-1 relative rounded-md">
              <input
                id="phone-number"
                type="text"
                name="phone-number"
                autocomplete="tel"
                class="py-3 px-4 block w-full pl-20 border-b  border-primary rounded-md"
                placeholder=""
              >
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-8">Message</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full border border-primary rounded-md" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <button type="submit" class="w-full inline-flex text-center items-center justify-center mt-4 px-6 py-3 border border-transparent rounded-md border-b text-base font-medium text-white bg-primary">
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
