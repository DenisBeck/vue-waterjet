<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue'

import useBreadcrumbs from '@/composables/useBreadcrumbs'
import useProducts from '@/composables/useProducts'
import useCountries from '@/composables/useCountries'
import useShops from '@/composables/useShops'
import useCategories from '@/composables/useCategories'
import useActions from '@/composables/useActions'

import { WaterjetBreadcrumbs } from '@/components/waterjetBreadcrumbs'
import { WaterjetProductsItem } from '@/components/waterjetProductsItem'
import { WaterjetTabs } from '@/components/waterjetTabs'
import { WaterjetList } from '@/components/ui/waterjetList'
import { WaterjetShopsBlock } from '@/components/waterjetShopsBlock'
import { WaterjetSkeleton } from '@/components/ui/waterjetSkeleton'
import { WaterjetTitle } from '@/components/ui/waterjetTitle'
import { WaterjetSlider } from '@/components/waterjetSlider'

const props = defineProps({
    id: String
})
const { pathItems, initBreadcrumbs } = useBreadcrumbs()
const { products, initProducts, isLoading, error } = useProducts()
const { initCountries, countries } = useCountries()
const { initShops, shops } = useShops()
const { categories, categoryLabels } = useCategories()
const { actions, initActions } = useActions()

const product = computed(() => products.value.find(item => item.id === +props.id))
const country = computed(() => countries.value.find(item => item.id === product.value?.features.country_id)?.country_name)

const features = computed(() => ([
    {
        title: 'Производитель',
        value: country.value || ''
    },
    {
        title: 'Количество мест, шт: ',
        value: product.value?.features.seat_count || '' 
    },
    {
        title: 'Мощность, л.с.',
        value: product.value?.features.power || ''
    },
    {
        title: 'Тип двигателя',
        value: product.value?.features.engine_type || ''
    },
    {
        title: 'Год выпуска',
        value: product.value?.features.manufacture_year || ''
    },
    {
        title: 'Мощность двигателя, л.с.',
        value: product.value?.features.engine_power || ''
    },
    {
        title: 'Макс.скорость',
        value: product.value?.features.speed_max || ''
    }
]))

const detailItems = ref([
    {
        id: 1,
        label: 'О товаре',
    },
    {
        id: 2,
        label: 'Характеристики',
    },
    {
        id: 3,
        label: 'Отзывы',
    },
    {
        id: 4,
        label: 'Самовывоз',
    },
    {
        id: 5,
        label: 'Доставка',
    },
    {
        id: 6,
        label: 'Cервис',
    },
    {
        id: 7,
        label: 'Гарантия',
    },
])

onMounted(() => {
    initCountries(),
    initProducts(),
    initShops(),
    initActions(),
    initBreadcrumbs('products', props.id)
})

watchEffect(() => {
    initProducts(),
    initBreadcrumbs('products', props.id)
})

</script>

<template>
    <div class="max-w-screen-xl mx-auto px-5 mb-10 w-full">
        <waterjet-breadcrumbs :id="props.id" :pathItems="pathItems" />
    </div>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <div v-if="isLoading" class="grid md:grid-cols-2 grid-cols-1 gap-10">
            <waterjet-skeleton height="400px"  />
            <waterjet-skeleton height="400px" />
        </div>
        <waterjet-products-item v-else-if="products" :features="features" theme="details" :item="product" />
        <div v-else>{{ error.text }}</div>
    </section>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <h1 hidden>Информация о товаре</h1>
        <waterjet-tabs theme="categories" :tabItems="detailItems">
            <template #2>
                <waterjet-list :items="features" theme="evenOdd" v-slot="slotProps" class="flex flex-col mx-auto max-w-3xl">
                    <div class="grid grid-cols-2 gap-2 px-5 py-2.5" :item="slotProps.item">
                        <div>{{ slotProps.item.title }}</div>
                        <div>{{ slotProps.item.value }}</div>
                    </div>
                </waterjet-list>
            </template>
            <template #4>
                <waterjet-shops-block :shopsWithProduct="product?.in_stock" :shops="shops" class="shops mx-auto" />
            </template>
        </waterjet-tabs>
    </section>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <waterjet-title label="С этим товаром покупают" class="mb-4"/>
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
.even-odd:nth-child(odd) {
    background: rgb(229 231 235);
}
.shops {
    min-width: 700px;
    overflow: hidden;
}
</style>