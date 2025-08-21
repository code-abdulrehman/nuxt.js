<template>
  <div class="list-container">
    <h1>Todos (from API)</h1>
    <div v-if="pending" style="margin: 1rem 0;">Loading...</div>
    <div v-else>
      <ul>
        <li v-if="!todos || todos.length === 0">No items</li>
        <li v-else v-for="todo in todos" :key="todo.id">
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.id }}. {{ todo.title }}
          </span>
          <span v-if="todo.completed" style="color: #38b2ac; font-size: 0.9em; margin-left: 10px;">(done)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: todos, pending, error } = await useFetch('/api/todos')
</script>

<style scoped>
.list-container {
    color: aliceblue;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
}
.list-container ul {
    width: 300px;
    border: 1px dashed teal;
    list-style-type: none;
    padding: 0;
    color: aliceblue;
    margin-left: 20px;
}
.list-container ul li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 10px;
    border-top: 1px solid teal;
}
</style>