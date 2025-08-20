<template>
    <div>
        <div v-for="product in products" :key="product.id" class="product-items">
            <NuxtLink :to="`/product/${product.id}`">
                {{ product.name }}
                <h1>Product</h1>
                <p>{{ product.description }}</p>
                <p>Price: {{ product.price }}</p>
                <img :src="product.image" alt="Product Image">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Product',
    meta: [
        { name: 'description', content: 'Product' }
    ]
})

const products = ref([
    { id: 1, name: 'Product 1', price: 100, description: 'This is the description of product 1', image: 'https://placehold.co/100' },
    { id: 2, name: 'Product 2', price: 200, description: 'This is the description of product 2', image: 'https://placehold.co/100' },
    { id: 3, name: 'Product 3', price: 300, description: 'This is the description of product 3', image: 'https://placehold.co/100' },
])
</script>

<style scoped>
div {
    padding: 10px;
    margin: 5px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    color: #000;
}

.product-items {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
h1 {
    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}
img {
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>