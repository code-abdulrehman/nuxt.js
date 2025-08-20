<template>
  <div>
    <header>
      <NuxtLink to="/" active-class="active">Home</NuxtLink>
      <NuxtLink to="/about" active-class="active">About</NuxtLink>
    </header>
    <hr>
    <slot />
  </div>
</template>
<style scoped>
div {
  padding: 1rem;
}
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
</style>