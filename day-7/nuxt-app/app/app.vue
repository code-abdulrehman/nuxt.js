<template>
  <div>
    <header>
      <NuxtLink to="/" active-class="active">Home</NuxtLink>
      <NuxtLink to="/blog" active-class="active">Blog</NuxtLink>
    </header>
    <hr>
    
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
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
  transform: translateY(10px);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  filter: blur(1rem);
}
</style>