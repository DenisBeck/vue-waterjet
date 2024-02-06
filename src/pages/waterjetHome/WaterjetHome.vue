<script setup>
import { computed, onMounted, ref } from 'vue'

import useCategories from '@/composables/useCategories'
import useProducts from '@/composables/useProducts'
import useActions from '@/composables/useActions'
import useSlides from '@/composables/useSlides'

import { WaterjetProductsItem } from '@/components/waterjetProductsItem'
import { WaterjetCategoriesItem } from '@/components/waterjetCategoriesItem'
import { WaterjetList } from '@/components/ui/waterjetList'
import { WaterjetSlider } from '@/components/waterjetSlider'
import { WaterjetTabs } from '@/components/waterjetTabs'
import { WaterjetInput } from '@/components/ui/waterjetInput'
import { WaterjetButton } from '@/components/ui/waterjetButton'
import { WaterjetTitle } from '@/components/ui/waterjetTitle'
import { WaterjetPromo } from '@/components/waterjetPromo'

const { products, initProducts } = useProducts()
const { categories, categoryLabels } = useCategories()
const { actions, initActions } = useActions()
const { slides, initSlides } = useSlides()

const randomId = computed(() => Math.floor(Math.random() * products.value.length))
const actionProduct = computed(() => products.value.find(item => item.id === randomId.value) || products.value[0])


const tabItems = ref([
    {
        id: 1,
        label: 'Поиск по номеру',
        placeholder: 'Введите номер'
    },
    {
        id: 2,
        label: 'Поиск по марке',
        placeholder: 'Введите марку'
    },
    {
        id: 3,
        label: 'Поиск по названию товара',
        placeholder: 'Введите название'
    }
])


onMounted(async () => {
    initProducts()
    initActions()
    initSlides()
})
</script>

<template>
    <section class="hero flex max-w-screen-xl mx-auto px-5 mt-10 mb-20 w-full gap-9 flex-col md:flex-row">
        <div class="flex-auto">
            <waterjet-slider :slides="slides" navigation pagination v-slot="slotProps">
                <div class="h-full">
                    <img :src="slotProps.item.image_url" :alt="slotProps.item.text" class="object-cover w-full h-full" />
                </div>
                <div class="shadow-text absolute z-10 top-14 right-10 md:right-20 lg:right-32 text-center text-white text-2xl md:text-4xl lg:text-6xl font-bold w-32 md:w-48 lg:w-96">{{ slotProps.item.text }}</div>
            </waterjet-slider>
        </div>
        <div class="hit-product">
            <waterjet-products-item v-if="actionProduct" :item="actionProduct" action />
        </div>
    </section>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full gap-9">
        <waterjet-tabs :tabItems="tabItems">
            <template v-for="item in tabItems" #[item.id] :key="item.id">
                <div class="flex w-full ">
                    <waterjet-input :placeholder="item.placeholder" class="search basis-auto flex-1 bg-slate-200 h-12" />
                    <waterjet-button label="Искать" class="w-32"/>
                </div>
            </template>
        </waterjet-tabs>
    </section>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <waterjet-list :items="categories" v-slot="slotProps" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-7">
            <waterjet-categories-item :item="slotProps.item" />
        </waterjet-list>
    </section>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <waterjet-promo />
    </section>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <waterjet-title label="Популярные товары" class="mb-4"/>
        <waterjet-tabs v-if="categoryLabels.length" :tabItems="categoryLabels" theme="categories">
            <template v-for="category in categories" #[category.id] :key="category.id">
                <waterjet-slider :slidesOnPage="4" :slides="products.filter(item => item.category_id === category.id)" navigation v-slot="slotProps" class="products-slider">
                    <waterjet-products-item :actions="actions" :item="slotProps.item" />
                </waterjet-slider>
            </template>
        </waterjet-tabs>
    </section>
</template>

<style>
.hero {
    min-height: 400px;
}
.hit-product {
    flex: 0 0 264px;
}
.search input {
    background: #F0F0F4;
}
.products-slider {
    min-height: 440px;
}
</style>