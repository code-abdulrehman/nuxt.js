<template>
  <header>
    <NuxtLink to="/" active-class="active">Home</NuxtLink>
    <NuxtLink to="/about" active-class="active">About</NuxtLink>
    <NuxtLink to="/todos" active-class="active">Todos</NuxtLink>
    <NuxtLink to="/product" active-class="active">Product</NuxtLink>
  </header>
  <hr>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #2b2b2b;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  color: #fff;
}
header {
  display: flex;
  gap: 10px;
}

header a {
  text-decoration: none;
  color: #fff;
}

header a:hover {
  color: #fff;
}

header a.active {
  color: #9dc0ff;
  font-weight: bold;
  text-decoration: underline;
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