<template>
  <div style="background-color: #f0f0f0; border: 1px dashed #000;">
    <header>
        <NuxtLink to="/admin/dashboard" active-class="active">Dashboard</NuxtLink>
        <NuxtLink to="/admin/settings" active-class="active">Settings</NuxtLink>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<style scoped>
div {
  display: flex;
}
main {
  padding: 1rem;

}
header {
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #88bbf7;
  border-right: 1px solid #000;
}

header a {
  text-decoration: none;
  color: blue;
  padding: 1rem;
  border: 1px solid #000;
  background-color: #f0f0f081;
}

header a.active {
  color: red;
  background-color: #f0f0f0;
}

</style>