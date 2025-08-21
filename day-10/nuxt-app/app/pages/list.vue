<template>
  <div class="list-container">
    <h1>List</h1>
    <div>
        <label for="todo">Todo</label>
        <input type="text" id="todo" v-model="todo" placeholder="Enter your todo" style="margin-left: 10px; padding: 5px 10px; border-radius: 5px; border: 1px solid teal;"/>
        <button @click="addItem" :disabled="!todo" style="margin-left: 10px; background-color: teal; color: white; border: none; padding: 5px 10px; border-radius: 5px;">Add</button>
    </div>
    <ul>
        <li v-if="items.length === 0">No items</li>
        <li v-else v-for="(item, index) in items" :key="item">
            {{ index + 1 }}. {{ item }}
            <button @click="removeItem(index)" style="margin-left: 10px; background-color: red; color: white; border: none; padding: 5px 10px; border-radius: 5px;">x</button>
        </li>
    </ul>
  </div>
</template>

<script setup>
const todo = ref('')
const items = ref([])

const addItem = () => {
    items.value.push(todo.value)
    todo.value = ''
}
const removeItem = (index) => {
    items.value.splice(index, 1)
}
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
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
    border-top: 1px solid teal;
}


</style>