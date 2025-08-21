<template>
  <section class="about-page">
    <h1>About This Nuxt App</h1>
    <p>
      Welcome to the About page! This Nuxt.js application demonstrates features like lazy loading and global components.
    </p>
    <ul>
      <li>Built with Nuxt 4</li>
      <li>Modern UI with @nuxt/ui</li>
      <li>Page transitions enabled</li>
      <li>Reusable global Footer component</li>
    </ul>
    <p>
      Explore the app to see more features in action.
    </p>
  </section>
</template>

<style scoped>
.about-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.about-page h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #222;
}
.about-page ul {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}
.about-page li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
</style>
