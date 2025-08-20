<template>
  <div>
    <h1>Blog Post Not Found</h1>
    <p>The blog post <b>{{ slugPath }}</b> does not exist.</p>
    <p>Available blog posts:</p>
    <ul>
      <li><NuxtLink to="/blog/nuxt-js">Nuxt.js</NuxtLink></li>
      <li><NuxtLink to="/blog/react-js">React.js</NuxtLink></li>
    </ul>
    <h3>Back to <NuxtLink to="/blog">Blog</NuxtLink></h3>
  </div>
</template>

<script setup>
const route = useRoute();

// Safely handle the slug parameter
const slugPath = computed(() => {
  if (route.params.slug && Array.isArray(route.params.slug)) {
    return route.params.slug.join('/');
  }
  return route.params.slug || 'unknown';
});

// Log the attempted route for debugging
console.log('Attempted to access blog post:', slugPath.value);
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>