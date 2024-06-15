<template>
  <div class="gd-container font-spacegrotesk">
    <header class="fixed w-full bg-blue-50 dark:bg-slate-950 z-10">
      <MainHeader />
    </header>
    <main>
      <div class="p-9" />
      <slot />
    </main>
    <footer class="w-full bg-blue-50 dark:bg-slate-950">
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
