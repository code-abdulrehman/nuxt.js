<template>
  <div class="api-demo-container">
    <h1>Server API Demo</h1>
    
    <div class="api-section">
      <h2>Hello API</h2>
      <div v-if="helloPending">Loading hello...</div>
      <div v-else-if="helloData">
        <pre>{{ JSON.stringify(helloData, null, 2) }}</pre>
      </div>
      <button @click="refreshHello">Refresh Hello</button>
    </div>

    <div class="api-section">
      <h2>Bonjour Route</h2>
      <div v-if="bonjourPending">Loading bonjour...</div>
      <div v-else-if="bonjourData">
        <pre>{{ JSON.stringify(bonjourData, null, 2) }}</pre>
      </div>
      <button @click="refreshBonjour">Refresh Bonjour</button>
    </div>

    <div class="api-section">
      <h2>Todos API</h2>
      <div v-if="todosPending">Loading todos...</div>
      <div v-else-if="todosData">
        <div class="todos-preview">
          <div v-for="todo in todosData.slice(0, 3)" :key="todo.id" class="todo-item">
            <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
              {{ todo.title }}
            </span>
          </div>
          <div v-if="todosData.length > 3" class="more-todos">
            ... and {{ todosData.length - 3 }} more todos
          </div>
        </div>
      </div>
      <button @click="refreshTodos">Refresh Todos</button>
    </div>
  </div>
</template>

<script setup>
// Using useFetch for different API endpoints
const { data: helloData, pending: helloPending, refresh: refreshHello } = await useFetch('/api/hello')
const { data: bonjourData, pending: bonjourPending, refresh: refreshBonjour } = await useFetch('/bonjour')
const { data: todosData, pending: todosPending, refresh: refreshTodos } = await useFetch('/api/todos')
</script>

<style scoped>
.api-demo-container {
  color: aliceblue;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.api-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid teal;
  border-radius: 8px;
}

.api-section h2 {
  color: #38b2ac;
  margin-bottom: 15px;
}

pre {
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 10px 0;
}

button {
  background: #38b2ac;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #2c9aa8;
}

.todos-preview {
  margin: 10px 0;
}

.todo-item {
  padding: 5px 0;
  border-bottom: 1px solid rgba(56, 178, 172, 0.3);
}

.more-todos {
  color: #38b2ac;
  font-style: italic;
  margin-top: 10px;
}
</style> 