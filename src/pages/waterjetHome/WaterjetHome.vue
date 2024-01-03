<script setup>
import { computed, onMounted } from 'vue'

import { useProductStore } from '@/stores/ProductStore'
import { useActionStore } from '@/stores/ActionStore'
import { useSlideStore } from '@/stores/SlideStore'
import { storeToRefs } from 'pinia'

import { WaterjetProductsItem } from '@/components/waterjetProductsItem';
import { WaterjetSlider } from '@/components/waterjetSlider';

const slideStore = useSlideStore()
const { slides } = storeToRefs(slideStore)
const { fetchSlides } = slideStore

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
    if(!slides.value.length) {
        await fetchSlides()
    }
})
</script>

<template>
    <div class="hero flex max-w-screen-xl mx-auto px-5 mb-5 w-full gap-9">
        <div class="flex-auto">
            <waterjet-slider :slides="slides" />
        </div>
        <div class="hit-product">
            <waterjet-products-item v-if="actionProduct" :item="actionProduct" action />
        </div>
    </div>
</template>

<style>
.hero {
    min-height: 400px;
}
.hit-product {
    flex: 0 0 264px;
}
</style>