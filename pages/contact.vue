<template>
    <div class="mt-24">
        <div class="px-4 py-8 text-center">
            <h1 class="text-primary font-bold text-5xl uppercase">Contact Us</h1>
<div class="mt-12">
        <form action="#" method="POST" class="grid grid-cols-1 px-8 text-center gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <div class="mt-1">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm  border-primary rounded-md" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
            <div class="mt-1">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm  border-primary rounded-md" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm  border-primary rounded-md" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input type="text" name="phone-number" id="phone-number" autocomplete="tel" class="py-3 px-4 block w-full pl-20  border-primary rounded-md" placeholder="+1 (555) 987-6543" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-8">Message</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm  border border-primary rounded-md" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <button type="submit" class="w-full inline-flex text-center items-center justify-cente mt-8r px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-indigo-700">
              Let's talk
            </button>
          </div>
        </form>
      </div>
        </div>
    </div>
</template>