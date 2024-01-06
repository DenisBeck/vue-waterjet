<script setup>
import { onMounted, ref, watch } from 'vue'

import { useProductStore } from '@/stores/ProductStore'
import { useActionStore } from '@/stores/ActionStore'
import { useCategoryStore } from '@/stores/CategoryStore'
import { useFilterStore } from '@/stores/FilterStore'
import { storeToRefs } from 'pinia'

import { WaterjetList } from '@/components/ui/waterjetList'
import { WaterjetProductsItem } from '@/components/waterjetProductsItem'
import { WaterjetTitle } from '@/components/ui/waterjetTitle'
import { WaterjetBreadcrumbs } from '@/components/waterjetBreadcrumbs'
import { WaterjetTags } from '@/components/waterjetTags'

const props = defineProps({
    id: String
})

const categoryStore = useCategoryStore()
const { categories } = storeToRefs(categoryStore)
const { fetchCategories } = categoryStore

const productStore = useProductStore()
const { products } = storeToRefs(productStore)
const { fetchProducts } = productStore

const actionStore = useActionStore()
const { actions } = storeToRefs(actionStore)
const { fetchActions } = actionStore


const filterStore = useFilterStore()
const { filters } = storeToRefs(filterStore)
const { fetchFilters, putFilters } = filterStore

const categorizedProducts = ref(null)
const currentCategory = ref(null)

const pathItems = ref([])
const paths = ref(window.location.pathname.split('/'))

const filterTags = ref([])
const componentKey = ref(0)

const renderProducts = () => {
    paths.value = window.location.pathname.split('/')
    if(props.id && products.value.length) {
        categorizedProducts.value = products.value.filter(item => item.category_id === +props.id)
    }
    if(props.id && categories.value.length) {
        currentCategory.value = categories.value.find(item => item.id === +props.id)
    }
    if(paths.value.length === 2) {
        pathItems.value = [{ text: 'Главная', href: '/' }, { text: 'Каталог', href: '/catalog' }]
    }
    if(paths.value.length > 2) {
        pathItems.value = [
            { text: 'Главная', href: '/' }, 
            { text: 'Каталог', href: '/catalog' },
            { text: currentCategory.value?.category_name, href: `/catalog/category/${props.id}`}
        ]
    }
    if(filters.value.length) {
        filterTags.value = filters.value.find(item => item.tags).tags
        console.log(filterTags.value)
    }
}

const changeFilterValue = (label) => {
    const changingTag = filterTags.value.find(item => item.label === label)
    changingTag.value = !changingTag.value
    putFilters({tags: filters.value.find(item => item.tags).tags})
    filterTags.value = filters.value.find(item => item.tags).tags
    console.log(filterTags.value)
    componentKey.value += 1
}

onMounted(() => {
    if(!products.value.length) {
        fetchProducts()
    }
    if(!actions.value.length) {
        fetchActions()
    }
    if(!categories.value.length) {
        fetchCategories()
    }
    fetchFilters()
    renderProducts()
})

watch(() => [props.id, filters.value, products.value.length, actions.value.length], renderProducts)
watch

</script>

<template>
    <div class="max-w-screen-xl mx-auto px-5 mb-10 w-full">
        <waterjet-breadcrumbs :id="props.id" :pathItems="pathItems" />
    </div>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <waterjet-title v-if="props.id" :label="currentCategory?.category_name" class="mb-7 text-3xl" />
        <waterjet-title v-else label="Все категории" class="mb-7 text-3xl" />
        
        <div>
            <waterjet-tags :key="componentKey" class="mb-6" :tags="filterTags" @change-filter-value="(args) => changeFilterValue(args)"/>
        </div>

        <waterjet-list v-if="props.id" :items="categorizedProducts" v-slot="slotProps" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-7">
            <waterjet-products-item :actions="actions" :item="slotProps.item" />
        </waterjet-list>
        <waterjet-list v-else :items="products" v-slot="slotProps" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-7">
            <waterjet-products-item :actions="actions" :item="slotProps.item" />
        </waterjet-list>
    </section>
</template>