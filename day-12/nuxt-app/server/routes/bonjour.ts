export default defineEventHandler((event) => {
  return {
    message: 'Bonjour le monde!',
    timestamp: new Date().toISOString()
  }
}) 