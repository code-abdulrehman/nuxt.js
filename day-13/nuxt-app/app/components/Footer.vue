<template>
  <footer class="footer">
    <div class="footer-content">
      <span>&copy; {{ new Date().getFullYear() }} Nuxt App. All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #222;
  color: #fff;
  padding: 1.5rem 0;
  text-align: center;
  position: relative;
  width: 100%;
  bottom: 0;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: 0.02em;
}
</style>
