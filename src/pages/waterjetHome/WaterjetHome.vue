<script setup>
import { computed, onMounted } from 'vue'

import { useProductStore } from '@/stores/ProductStore'
import { useActionStore } from '@/stores/ActionStore'
import { storeToRefs } from 'pinia'

import { WaterjetProductsItem } from '@/components/waterjetProductsItem';
import { WaterjetSlider } from '@/components/waterjetSlider';

const productStore = useProductStore()
const { products } = storeToRefs(productStore)
const { fetchProducts } = productStore

const actionStore = useActionStore()
const { actions } = storeToRefs(actionStore)
const { fetchActions } = actionStore

const randomId = computed(() => Math.floor(Math.random() * products.value.length))
const actionProduct = computed(() => products.value.find(item => item.id === randomId.value) || products.value[0])

onMounted(async () => {
    if(!products.value.length) {
        await fetchProducts()
    }
    if(!actions.value.length) {
        await fetchActions()
    }
})
</script>

<template>
    <div>
        <div>
            <waterjet-slider />
        </div>
        <div>
            <waterjet-products-item v-if="actionProduct" :item="actionProduct" action />
        </div>
    </div>
</template>