<template>
  <div class="mt-24 md:(mt-36)">
    <div class="grid grid-cols-12 px-4 py-8 text-center md:(px-24)">
      <h1 class="col-span-12 text-primary font-bold text-5xl uppercase md:( text-7xl col-span-4 text-left)">
        Contact Us
      </h1>
      <div class="mt-12 col-span-12 md:(col-span-8 mt-0)">
        <form data-netlify="true" netlify-honeypot="bot-field" name="contact" method="POST" class="grid grid-cols-1 px-8 text-center gap-y-4 sm:grid-cols-2 sm:gap-x-8 md:(text-left gap-8)">
          <div>
                <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
            <label for="first-name" class="block text-sm font-medium text-gray-700 md:(text-base)">First name</label>
            <div class="mt-1">
              <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="py-3 px-4 block w-full border-b  border-primary text-center md:(text-left) ">
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700 md:(text-base)">Last name</label>
            <div class="mt-1">
              <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="py-3 px-4 block w-full border-b  border-primary text-center md:(text-left) ">
            </div>
          </div>
          <div class="">
            <label for="email" class="block text-sm font-medium text-gray-700 md:(text-base)">Email</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full border-b  border-primary text-center md:(text-left) ">
            </div>
          </div>
          <div class="">
            <label for="phone-number" class="block text-sm font-medium text-gray-700 md:(text-base)">Phone Number</label>
            <div class="mt-1 relative ">
              <input
                id="phone-number"
                type="text"
                name="phone-number"
                autocomplete="tel"
                class="py-3 px-4 block w-full border-b  border-primary text-center md:(text-left) "
                placeholder=""
              >
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700 md:(text-base) mb-8">Message</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full border border-primary text-center " />
            </div>
          </div>
          <div class="sm:col-span-2">
            <button type="submit" class="w-full inline-flex text-center items-center justify-center mt-4 px-6 py-3 border border-transparent  border-b text-base font-medium text-white bg-primary">
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
