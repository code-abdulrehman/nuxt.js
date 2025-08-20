<template>
  <div>
    <header>
      <NuxtLink to="/" active-class="active">Default</NuxtLink>
      <NuxtLink to="/admin/dashboard" active-class="active">Admin</NuxtLink>
    </header>
    <hr>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <hr>
    <footer>
        copyright 2025
    </footer>
  </div>
</template>
<script setup>
</script>

<style scoped>
header {
  display: flex;
  gap: 1rem;
  background-color: #f0f0f0;
}

header a {
  text-decoration: none;
  color: blue;
}


header a.active {
  color: red;
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