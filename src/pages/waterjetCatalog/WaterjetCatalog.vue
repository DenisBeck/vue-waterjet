<script setup>
import { useProductStore } from '@/stores/ProductStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = useProductStore()
const { products } = storeToRefs(store)
const { fetchProducts } = store

onMounted(() => {
    fetchProducts()
    console.log(products.value)
})
</script>

<template>
    <h1>Products</h1>
    <div v-for="product in products" :key="product.id">
        <div>
            <img :src="product.image_url" :alt="product.title" />
        </div>
        <div>{{ product.title }}</div>
        <div>{{ product.price_new }}</div>
    </div>
</template>