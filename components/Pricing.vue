<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-coming-bg bg-cover bg-fixed">
  <div class="h-full bg-black bg-opacity-50">
    <!-- Overlapping background -->
    <div aria-hidden="true" class="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"></div>

  <SectionTitle class="mt-16" text1="Rate" text2="Card"  size="text-4xl" color2="text-primary" color1="text-gray-100" />

    <h2 class="sr-only">Rates</h2>


    <!-- Cards -->
    <div class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
      <!-- Decorative background -->
      <div aria-hidden="true" class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-primary rounded-tl-lg rounded-tr-lg lg:block"></div>

      <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
        <div class="bg-primary lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
          <div>
            <h3 class="text-white text-sm font-semibold uppercase text-center tracking-wide">Student</h3>
            <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div class="mt-3 flex items-center">
                <p class="text-white text-4xl font-extrabold tracking-tight">$60</p>
                <div class="ml-4">
                  <p class="text-white text-sm">USD / mo</p>
                  <p class="text-gray-200 text-sm">$20 joining fee</p>
                </div>
              </div>
            </div>
          </div>
          <h4 class="sr-only">Features</h4>
          <ul role="list" class="border-purple-400 divide-purple-400 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-gray-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Basic invoicing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-gray-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Easy to use accounting</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-gray-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Mutli-accounts</span>
            </li>
          </ul>
        </div>

        <div class="bg-white ring-2 ring-primary shadow-md pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
          <div>
            <h3 class="text-primary text-sm font-semibold uppercase text-center tracking-wide">General</h3>
            <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div class="mt-3 flex items-center">
                <p class="text-primary text-4xl font-extrabold tracking-tight">$80</p>
                <div class="ml-4">
                  <p class="text-gray-700 text-sm">USD / mo</p>
                  <p class="text-gray-500 text-sm">$20 joining fee</p>
                </div>
              </div>
            </div>
          </div>
          <h4 class="sr-only">Features</h4>
          <ul role="list" class="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-primary w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Advanced invoicing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-primary w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Easy to use accounting</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-primary w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Mutli-accounts</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-primary w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Tax planning toolkit</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-primary w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">VAT &amp; VATMOSS filing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-primary w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Free bank transfers</span>
            </li>
          </ul>
        </div>

        <div class="bg-primary lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
          <div>
            <h3 class="text-white text-sm font-semibold uppercase text-center tracking-wide">Pensioners</h3>
            <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div class="mt-3 flex items-center">
                <p class="text-white text-4xl font-extrabold tracking-tight">$50</p>
                <div class="ml-4">
                  <p class="text-white text-sm">USD / mo</p>
                </div>
              </div>
               </div>
          </div>
          <h4 class="sr-only">Features</h4>
          <ul role="list" class="border-purple-400 divide-purple-400 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-gray-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Basic invoicing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-gray-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Easy to use accounting</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-gray-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Mutli-accounts</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-gray-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Tax planning toolkit</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>

</template>