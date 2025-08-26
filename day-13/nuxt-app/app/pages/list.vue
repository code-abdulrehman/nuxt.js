<template>
  <div>
    <h1>List</h1>
    <ul>    
        <li v-for="post in data" :key="post.id">
            <NuxtLink :to="`/list/${post.id}`">{{ post.title }}</NuxtLink>
        </li>
    </ul>
    <ul>
        <li v-for="comment in comments" :key="comment.id">
            {{ comment.body }}
        </li>
    </ul>
  </div>
</template>

<script setup>
const {data: comments} = await useFetch('https://jsonplaceholder.typicode.com/comments')
const {data} = await useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts'))

console.log(data.value)

</script>

<style scoped>
div {
    display: flex;
    gap: 10px;
    overflow: hidden;
    height: 90vh;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    overflow: auto;
}


li {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
}   

a {
    text-decoration: none;
    color: #f8f8f8;
}

a:hover {
    color: #646cff;
}
</style>