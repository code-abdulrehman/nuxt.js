<template>
  <header class="header">
    <div class="header-content">
      <NuxtLink to="/" class="logo">
        Nuxt App
      </NuxtLink>
      <nav class="nav">
        <NuxtLink to="/" class="nav-link" exact>Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/list" class="nav-link">List</NuxtLink>
        <NuxtLink to="/todo" class="nav-link">Todo</NuxtLink>
      </nav>
    </div>
  </header>
</template>

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
