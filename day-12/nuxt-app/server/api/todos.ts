export default defineEventHandler(async (event) => {
  // Fetch todos from external API
  const response = await $fetch('https://jsonplaceholder.typicode.com/todos')
  // Directly return the JSON data
  return response
})