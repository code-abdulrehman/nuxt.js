<template>
  <li :class="{ done: todo.done }" class="todo-item">
    <label>
      <input type="checkbox" v-model="todo.done" @change="updateTodoStatus" />
      <span>{{ todo.text }}</span>
    </label>
    <div class="todo-meta">
      <span class="todo-date">{{ formatDate(todo.createdAt) }}</span>
      <button class="remove-btn" @click="$emit('remove')">Remove</button>
    </div>
  </li>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['remove'])

// Inject the save function from parent
const saveTodosToStorage = inject('saveTodosToStorage', () => {})

function updateTodoStatus() {
  // Save to localStorage when todo status changes
  saveTodosToStorage()
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 1px solid #ececec;
  font-size: 1.08rem;
}
.todo-item:last-child {
  border-bottom: none;
}
.todo-item label {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  flex: 1;
}
.todo-item.done span {
  text-decoration: line-through;
  color: #aaa;
}
.todo-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.todo-date {
  font-size: 0.8rem;
  color: #888;
  white-space: nowrap;
}
.remove-btn {
  background: none;
  border: none;
  color: #e53e3e;
  font-size: 0.98rem;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  transition: background 0.15s;
}
.remove-btn:hover {
  background: #ffe5e5;
}
</style>
