<template> 
    <div>   
        <h1>About</h1>
        <p>This is the About page.</p>
        <NuxtLink to="/todos">View Todos</NuxtLink>
    </div>
</template>

<script setup>
useHead({
    title: 'About',
    meta: [
        { name: 'description', content: 'About' }
    ]
})
</script>

<style scoped> 
div {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    color: red;
}
h1 {
    color: blue;
}
a {
    color: #007bff;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>