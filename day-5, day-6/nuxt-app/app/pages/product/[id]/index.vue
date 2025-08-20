<template>
    <div>
        <h1>Product {{ $route.params.id }}</h1>
        <p>This is the detail page for product item {{ $route.params.id }}</p>
        <NuxtLink to="/product">Back to Product</NuxtLink>
    </div>
</template>

<script setup>
const route = useRoute();
useHead({
    title: `Product ${route.params.id}`,
    meta: [
        { name: 'description', content: `Product item ${route.params.id}` }
    ]
})
</script>

<style scoped>
div {
    padding: 10px;
    margin: 5px 0;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>