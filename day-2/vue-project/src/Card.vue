<template>
    <div class="card">
        <h1>Card</h1>
        <img :src="img1" alt="Card Image" v-if="username" />
        <img :src="img2" alt="Card Image" v-else />
        <p class="username">Hi ! {{ username }},</p>
        <p>
            Age: {{ age }} <button @click="incrementAge">Increment</button> <button @click="alertOn" v-if="username">alertOn</button>
        </p>
        <input type="text" v-model="username" placeholder="Enter your name" />
    </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue';

const emit = defineEmits(['alertOn']);
const alertOn = () => {
    emit('alertOn', `hello ${username.value}`);
}


const props = defineProps({
    age: {
        type: String,
        required: true,
        default: 'Default age',
    },
})

const img1 = ref('https://fastly.picsum.photos/id/213/200/300.jpg?blur=5&hmac=p95CBPN_4ewznAfABMPx0yumJ87sz11WvZSZWMSnXZ4');
const img2 = ref('https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI');

const username = ref('');
const age = ref(props.age);

const incrementAge = () => {
    age.value++;
}
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: #f0f0f0;
    overflow: hidden;
    padding: 10px;
    position: relative;
    width: 400px;
}

.card .username {
    color: #a00000;
    font-size: 24px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 70%;
    display: inline-block;
}

.card p,
.card h1 {
    color: #666;
    font-size: 16px;
    font-weight: normal;
}

.card img {
    width: 100px;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
}

.card button {
    background-color: #a00000;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
.card button:hover {
    background-color: #800000;
}
.card button:active {
    background-color: #600000;
}
</style>