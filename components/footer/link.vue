<template>
  <div class="flex flex-row gap-5 dark:text-zinc-300   my-5 md:my-0 md:justify-self-center">
    <!-- <p class="text-black dark:text-zinc-300  text-base font-semibold">
      Quick Link
    </p> -->
    <NuxtLink to="/contact" class="hover:underline">
      <p class="text-xs dark:text-zinc-300">
      Contact Us
      </p>
    </NuxtLink>
    <NuxtLink to="/terms" class="hover:underline">
      <p class="dark:text-zinc-300  text-xs">
    Terms of Use
      </p>
    </NuxtLink>
    <NuxtLink to="/privacy" class="hover:underline">
      <p class="dark:text-zinc-300  text-xs">
      Privacy Policy
      </p>
    </NuxtLink>   
  </div>
</template>
