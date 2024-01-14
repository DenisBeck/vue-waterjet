<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'

import useFilters from '@/composables/useFilters'
import useActions from '@/composables/useActions'
import useProducts from '@/composables/useProducts'
import useCategories from '@/composables/useCategories'

import { WaterjetList } from '@/components/ui/waterjetList'
import { WaterjetProductsItem } from '@/components/waterjetProductsItem'
import { WaterjetTitle } from '@/components/ui/waterjetTitle'
import { WaterjetBreadcrumbs } from '@/components/waterjetBreadcrumbs'
import { WaterjetTags } from '@/components/waterjetTags'
import { WaterjetSelect } from '@/components/ui/waterjetSelect'
import { WaterjetButton } from '@/components/ui/waterjetButton'
import { WaterjetTabs } from '@/components/waterjetTabs'
import { WaterjetSpoiler } from '@/components/waterjetSpoiler'

const props = defineProps({
    id: String
})

const {
    initFilters,
    putFilters,
    filters,
    spoilerItems,
    filterTags,
    sortOptions
} = useFilters()
const { initActions, actions } = useActions()
const { products, initProducts } = useProducts()
const { categories, initCategories } = useCategories()

const categorizedProducts = ref(null)
const currentCategory = ref(null)

const pathItems = ref([])
const paths = ref(window.location.pathname.split('/'))

const showAllTags = ref(false)
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
}

const changeFilterValue = (label) => {
    const changingTag = filterTags.value.find(item => item.label === label)
    changingTag.value = !changingTag.value
    putFilters({tags: filters.value.find(item => item.tags).tags})
    filterTags.value = filters.value.find(item => item.tags).tags
    componentKey.value += 1
}

const showAll = () => {
    showAllTags.value = !showAllTags.value
}

onMounted(() => {
    initProducts()
    initCategories()
    initActions()
    initFilters()
    renderProducts()
})

watch(() => [props.id, filters.value, products.value.length, actions.value.length], renderProducts)
watchEffect (() => {
    useFilters
})

</script>

<template>
    <div class="max-w-screen-xl mx-auto px-5 mb-10 w-full">
        <waterjet-breadcrumbs :id="props.id" :pathItems="pathItems" />
    </div>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <waterjet-title v-if="props.id" :label="currentCategory?.category_name" class="mb-7 text-3xl" />
        <waterjet-title v-else label="Все категории" class="mb-7 text-3xl" />
        
        <div class="flex items-center justify-between mb-6 gap-8">
            <waterjet-tags :key="componentKey" :tags="filterTags" :shown-all="showAllTags" @show-more="showAll" @change-filter-value="(args) => changeFilterValue(args)" />
            <waterjet-select v-if="sortOptions.length" class="ml-auto" :options="sortOptions" />
            <div class="flex items-center gap-2.5">
                <waterjet-button icon="WaterjetBricks" class="layout opacity-30 bg-transparent hover:bg-transparent w-5 h-5 text-slate-500"/>
                <waterjet-button isActive icon="WaterjetLines" class="layout opacity-30 bg-transparent hover:bg-transparent w-5 h-5 text-slate-500"/>
            </div>
        </div>

        <div class="flex flex-row-reverse">
            <waterjet-list v-if="props.id" :items="categorizedProducts" v-slot="slotProps" class="basis-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-7">
                <waterjet-products-item :actions="actions" :item="slotProps.item" />
            </waterjet-list>
            <waterjet-list v-else :items="products" v-slot="slotProps" class="basis-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-7">
                <waterjet-products-item :actions="actions" :item="slotProps.item" />
            </waterjet-list>
            <aside class="w-72 basis-72 shrink-0">
                <waterjet-tabs theme="filters" :tabItems="[{ id: 1, label: 'Параметры' }, { id: 2, label: 'По марке' }]">
                    <template #1>
                        <div class="flex flex-col w-full ">
                            <waterjet-spoiler theme="filter" :spoilerItems="spoilerItems">
                                <template #1>
                                    
                                </template>
                            </waterjet-spoiler>
                        </div>
                    </template>
                    <template #2>

                    </template>
                </waterjet-tabs>
            </aside>
        </div>
            
    </section>
</template>

<style>
.layout {
    color: black;
}
.layout.active {
    opacity: 1;
    cursor: default;
}
</style>