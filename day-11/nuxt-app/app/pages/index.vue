<template>
  <section class="home-page">
    <h1>Welcome to the Nuxt App!</h1>
    <p>
      This is the home page of your Nuxt.js application.
    </p>
    <ul>
      <li>✨ Lazy loading for fast performance</li>
      <li>🌍 Global Footer component</li>
      <li>🎨 Modern UI with @nuxt/ui</li>
      <li>🔄 Smooth page transitions</li>
    </ul>
    <p>
      Explore the app to see more features in action.
    </p>
  </section>
</template>

<script setup>
// No script logic needed for this simple home page
</script>

<style scoped>
.home-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.home-page h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #38b2ac;
}
.home-page ul {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}
.home-page li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
</style>