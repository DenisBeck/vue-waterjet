<script setup>
import { onMounted, ref, watchEffect } from 'vue'

import useFilters from '@/composables/useFilters'
import useActions from '@/composables/useActions'
import useProducts from '@/composables/useProducts'
import useCategories from '@/composables/useCategories'
import useBreadcrumbs from '@/composables/useBreadcrumbs'

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
const { products, categorizedProducts, initProducts, renderProducts } = useProducts()
const { initCategories, categories, currentCategory } = useCategories()
const { pathItems, initBreadcrumbs } = useBreadcrumbs()

currentCategory.value = categories.value.find(item => item.id === +props.id)

const showAllTags = ref(false)
const componentKey = ref(0)

const filterForm = ref(null)
const isProductsLayoutLine = ref(false)

const changeFilterValue = (label) => {
    const changingTag = filterTags.value.find(item => item.label === label)
    changingTag.value = !changingTag.value
    putFilters({tags: filters.value.find(item => item.tags).tags})
    filterTags.value = filters.value.find(item => item.tags).tags
    componentKey.value += 1
}

const submitFilterForm = (e) => {
    e.preventDefault()
    console.log(e.target)
}

const showAll = () => {
    showAllTags.value = !showAllTags.value
}

const changeProductsLayout = () => {
    isProductsLayoutLine.value = !isProductsLayoutLine.value
    console.log(isProductsLayoutLine)
}

onMounted(() => {
    initProducts()
    initCategories()
    initActions()
    initFilters()
})

watchEffect(() => {
    spoilerItems,
    initBreadcrumbs('categories', props.id),
    renderProducts(props.id)
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
            <waterjet-select v-if="sortOptions.length" class="ml-auto" initial-value="Сортировать по" :options="sortOptions" />
            <div class="flex items-center gap-2.5">
                <waterjet-button :isActive="!isProductsLayoutLine" :disabled="!isProductsLayoutLine" @handle-click="changeProductsLayout" icon="WaterjetBricks" class="layout opacity-100 bg-transparent hover:bg-transparent w-5 h-5 text-slate-500"/>
                <waterjet-button :isActive="isProductsLayoutLine" :disabled="isProductsLayoutLine" @handle-click="changeProductsLayout" icon="WaterjetLines" class="layout opacity-100 bg-transparent hover:bg-transparent w-5 h-5 text-slate-500"/>
            </div>
        </div>

        <div class="content flex flex-row-reverse gap-5">
            <waterjet-list v-if="props.id" :items="categorizedProducts" v-slot="slotProps" :class="{'flex': isProductsLayoutLine, 'grid': !isProductsLayoutLine}" class="basis-auto grow flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-7 h-fit">
                <waterjet-products-item :theme="isProductsLayoutLine ? 'inline' : ''" :actions="actions" :item="slotProps.item" />
            </waterjet-list>
            <waterjet-list v-else :items="products" v-slot="slotProps" :class="{'flex': isProductsLayoutLine, 'grid': !isProductsLayoutLine}" class="basis-auto grow flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-7">
                <waterjet-products-item :theme="isProductsLayoutLine ? 'inline' : ''" :actions="actions" :item="slotProps.item" />
            </waterjet-list>
            <aside class="w-72 shrink-0 relative">
                <waterjet-tabs class="tabs" theme="filters" :tabItems="[{ id: 1, label: 'Параметры' }, { id: 2, label: 'По марке' }]">
                    <template #1>
                        <form class="flex flex-col w-full" ref="filterForm">
                            <waterjet-list v-if="spoilerItems.length" :items="spoilerItems" v-slot="slotProps">
                                <waterjet-spoiler theme="filter" :spoilerItem="slotProps.item" class="mb-3">
                                
                                </waterjet-spoiler>
                            </waterjet-list>
                            <waterjet-button label="Выбрать" type="submit" @click="submitFilterForm"/>
                        </form>
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
    opacity: 1;
}
.layout.active {
    opacity: 0.3;
}
@media(max-width: 1280px) {
    .content {
        flex-direction: column-reverse;
    }
}
</style>