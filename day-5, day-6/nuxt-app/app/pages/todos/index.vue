<template>
    <div>
        <h1>Todos</h1>
        <div v-for="todo in todos" :key="todo.id">
            <NuxtLink :to="`/todos/${todo.id}`">{{ todo.title }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
// Set page head
useHead({
    title: 'Todos',
    meta: [
        { name: 'description', content: 'Todo list' }
    ]
})

// Define todos as reactive data
const todos = ref([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' },
])

onMounted(() => {
    console.log('Todos page mounted')
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