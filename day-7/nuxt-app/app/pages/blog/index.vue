<template>
  <div>
    <h1>Blog</h1>
    <NuxtLink to="/blog/nuxt-js" active-class="active">Nuxt.js</NuxtLink>
    <NuxtLink to="/blog/react-js" active-class="active">React.js</NuxtLink>
  </div>
</template>
<script setup>

</script>
<style>
a {
  display: block;
  margin-bottom: 1rem;
}
a:hover {
  color: red;
}
a.active {
  color: rgb(0, 255, 115);
}
</style>