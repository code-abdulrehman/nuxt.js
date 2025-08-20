<template>
  <section class="todo-page">
    <h1>Todo List</h1>
    <form @submit.prevent="addTodo" class="todo-form">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add a new todo"
        class="todo-input"
        required
      />
      <button type="submit" class="add-btn">Add</button>
    </form>
    <ul class="todo-list" ref="todoListRef">
        <ClientOnly>
            <TodoItem
        v-for="(todo, idx) in displayedTodos"
        :key="todo.id"
            :todo="todo"
            @remove="removeTodo(todo.id)"
            />
        </ClientOnly>
      
    </ul>
    <div v-if="todos.length === 0" class="empty-state">
      No todos yet. Add one above!
    </div>
    <div v-if="isLoading" class="loading">
      Loading more todos...
    </div>
    <div v-if="todos.length > 0 && displayedTodos.length < todos.length" class="load-more">
      Scroll to load more todos
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, nextTick, onUnmounted, provide, defineAsyncComponent } from 'vue'

// Lazy load TodoItem component
const TodoItem = defineAsyncComponent({
  loader: () => import('../../components/TodoItem.vue'),
  loadingComponent: {
    template: '<div class="async-loading">Loading todo item...</div>',
    setup() {
      return {}
    }
  },
  errorComponent: {
    template: '<div class="async-error">Failed to load todo item</div>',
    setup() {
      return {}
    }
  },
  delay: 200,
  timeout: 3000
})

const newTodo = ref('')
const todos = ref([])
const displayedCount = ref(10)
const isLoading = ref(false)
const todoListRef = ref(null)

// Load todos from localStorage on mount
onMounted(() => {
  loadTodosFromStorage()
  setupScrollListener()
})

// Computed property for displayed todos
const displayedTodos = computed(() => {
  return todos.value.slice(0, displayedCount.value)
})

// Load todos from localStorage
function loadTodosFromStorage() {
  const storedTodos = localStorage.getItem('todos')
  if (storedTodos) {
    todos.value = JSON.parse(storedTodos)
  }
}

// Save todos to localStorage
function saveTodosToStorage() {
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

// Provide saveTodosToStorage function to child components
provide('saveTodosToStorage', saveTodosToStorage)

// Setup scroll listener for lazy loading
function setupScrollListener() {
  const handleScroll = () => {
    if (isLoading.value || displayedCount.value >= todos.value.length) return
    
    const element = todoListRef.value
    if (!element) return
    
    const rect = element.getBoundingClientRect()
    const isNearBottom = rect.bottom <= window.innerHeight + 100
    
    if (isNearBottom) {
      loadMoreTodos()
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}

// Load more todos (one by one)
async function loadMoreTodos() {
  if (isLoading.value || displayedCount.value >= todos.value.length) return
  
  isLoading.value = true
  
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  displayedCount.value += 1
  isLoading.value = false
}

function addTodo() {
  if (newTodo.value.trim() === '') return
  
  const newTodoItem = {
    id: Date.now() + Math.random(), // Unique ID
    text: newTodo.value.trim(),
    done: false,
    createdAt: new Date().toISOString()
  }
  
  todos.value.unshift(newTodoItem) // Add to beginning
  newTodo.value = ''
  saveTodosToStorage()
  
  // If this is the first todo, reset displayed count
  if (todos.value.length === 1) {
    displayedCount.value = 10
  }
}

function removeTodo(id) {
  const index = todos.value.findIndex(todo => todo.id === id)
  if (index !== -1) {
    todos.value.splice(index, 1)
    saveTodosToStorage()
    
    // Adjust displayed count if needed
    if (displayedCount.value > todos.value.length) {
      displayedCount.value = todos.value.length
    }
  }
}
</script>

<style scoped>
.todo-page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  min-height: 80vh;
}
.todo-page h1 {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  color: #38b2ac;
}
.todo-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.todo-input {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 1px solid #ececec;
  border-radius: 6px;
  font-size: 1rem;
}
.add-btn {
  background: #38b2ac;
  color: #fff;
  border: none;
  padding: 0 1.2rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.add-btn:hover {
  background: #319795;
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 200px;
}
.empty-state {
  margin-top: 1.5rem;
  color: #888;
  text-align: center;
  font-size: 1.08rem;
}
.loading {
  text-align: center;
  color: #38b2ac;
  margin-top: 1rem;
  font-size: 0.9rem;
}
.load-more {
  text-align: center;
  color: #666;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-style: italic;
}
.async-loading {
  padding: 0.7rem 0;
  color: #38b2ac;
  font-size: 0.9rem;
  text-align: center;
  border-bottom: 1px solid #ececec;
}
.async-error {
  padding: 0.7rem 0;
  color: #e53e3e;
  font-size: 0.9rem;
  text-align: center;
  border-bottom: 1px solid #ececec;
}
</style>
