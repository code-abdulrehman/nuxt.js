<template>
    <div>
        <h1>Todo {{ $route.params.id }}</h1>
        <p>This is the detail page for todo item {{ $route.params.id }}</p>
        <NuxtLink to="/todos">Back to Todos</NuxtLink>
    </div>
</template>

<script setup>
// Get the route parameters
const route = useRoute();

// Set page head
useHead({
    title: `Todo ${route.params.id}`,
    meta: [
        { name: 'description', content: `Todo item ${route.params.id}` }
    ]
})
</script>

<style scoped>
div {
    padding: 20px;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>