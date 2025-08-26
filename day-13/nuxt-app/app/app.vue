<template>
  <div class="app-container">
    <NuxtRouteAnnouncer />

  <NuxtLoadingIndicator :throttle="0" />
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  background-color: #363636;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>