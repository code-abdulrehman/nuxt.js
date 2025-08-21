<template>
  <header class="header">
    <div class="header-content">
      <NuxtLink to="/" class="logo">
        Nuxt App
      </NuxtLink>
      <nav class="nav">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link" exact>{{ item.name }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>
<script setup>  
const navItems = [
  {
    name: 'Home',
    to: '/'
  },
  
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Todo',
    to: '/todo'
  },
  {
    name: 'List',
    to: '/list'
  }
]
</script>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #ececec;
  padding: 1.2rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
  color: #38b2ac;
  text-decoration: none;
  letter-spacing: 0.04em;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-size: 1.08rem;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #38b2ac;
  font-weight: 600;
}
</style>
