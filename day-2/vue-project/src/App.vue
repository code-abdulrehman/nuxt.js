<script setup>
import Card from './Card.vue';
import { ref, onMounted, reactive } from 'vue';

const alertOn = (message) => {
  if (message.length > 10) {
    alert(message);
  }
  else {
    alert('Message is too short');
  }
}

const users = reactive([
  { name: 'John Doe', age: 20 },
  { name: 'Zeo', age: 21 },
]);

// randona: generates a random user object with a random name and age
function randona() {
  const age = (Math.floor(Math.random() * 100) + 18).toString();
  return { age };
}

// diff: returns a new user object with a different name and age than the last one
let lastUser = null;
function diff() {
  let newUser;
  do {
    newUser = randona();
  } while (lastUser && (newUser.age === lastUser.age));
  lastUser = newUser;
  return newUser;
}

const loading = ref(false);

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});

</script>

<template>
  <div class="app">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1>You did it!</h1>
      <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
      </p>
      <hr>
      <button @click="users.push(diff())">Add user</button>
      <hr>
      <div v-for="user in users" :key="user.name">
        <Card :age="user.age" @alertOn="alertOn" />
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app {
  padding: 20px;
  background-color: #333;
  height: 100vh;
  width: 100vw;
  color: #fff;
  font-family: Arial, sans-serif;
}
</style>
