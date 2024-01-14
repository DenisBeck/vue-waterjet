<script setup>
import { computed, onMounted, ref } from 'vue'

import useShops from '@/composables/useShops'
import useCategories from '@/composables/useCategories'

import { WaterjetList } from '../ui/waterjetList'
import { WaterjetLogo } from '../ui/waterjetLogo'
import { WaterjetBurger } from '../ui/waterjetBurger'
import { WaterjetProfileActions } from '../waterjetProfileActions'
import { WaterjetLocation } from '../waterjetLocation'

const { currentShop, initShops } = useShops()
const { categories, initCategories } = useCategories()

const categoryLinks = computed(() => categories.value.map(item => ({
    id: item.id,
    value: item.category_name,
    link: `/catalog/category/${item.id}` 
})))

const topLinks = ref([
    { id: 1, value: 'Магазины', link: '/shops', icon: 'WaterjetShopsIcon'},
    { id: 2, value: 'Акции', link: '/actions', icon: 'WaterjetActionsIcon'},
    { id: 3, value: 'Доставка и оплата', link: '/delivery', icon: 'WaterjetDeliveryIcon'}
])

const active = ref(false)

const toggleMenu = () => {
    if(active.value) {
        document.documentElement.classList.remove('lock')
    } else {
        document.documentElement.classList.add('lock')
    }
    active.value = !active.value
}

onMounted(async () => {
    initCategories()
    initShops()
})
</script>

<template>
    <header class="max-w-screen-xl mx-auto px-5 mb-10 w-full">
        <div class="flex items-center relative z-20 justify-between py-4">
            <waterjet-burger :active="active" class="md:hidden relative" @toggle-menu="toggleMenu">
                <div :style="{transform: active ? 'translateX(0)' : 'translateX(-100%)'}" class="left-0 overflow-x-hidden overflow-y-auto px-5 transition transition-property-left duration-300 fixed bg-white top-24 bottom-0 gap-7 flex flex-col items-center w-full">
                    <waterjet-profile-actions class="flex flex-col gap-5 w-full items-start gap-x-2.5 mx-3.5" withText />
                    <waterjet-list class="mx-3.5 gap-x-6 lg:gap-x-12 w-full flex flex-col gap-5 items-start justify-between text-base lg:text-xl font-bold" withIcons :items="topLinks" />
                    <waterjet-list class="flex flex-col gap-5 w-full items-start flex-wrap gap-x-14" :items="categoryLinks" />
                    <waterjet-location :shop="currentShop" class="flex gap-2.5 w-full items-start text-base lg:text-xl font-bold" />
                </div>
            </waterjet-burger>
            <waterjet-list class="hidden mx-3.5 gap-x-6 lg:gap-x-12 md:flex items-center justify-between text-base lg:text-xl font-bold" :items="topLinks" />
            <waterjet-logo class="w-14 h-14 relative z-30 lg:w-20 lg:h-20" />
            <waterjet-location :shop="currentShop" class="hidden md:flex items-center text-base lg:text-xl font-bold" />
            <waterjet-profile-actions class="hidden md:flex items-center gap-x-2.5 mx-3.5" />
        </div>
        <nav class="hidden md:block bg-gray-200 p-3.5 text-xl">
            <waterjet-list class="flex items-center flex-wrap gap-x-14 hover:drop-shadow-sm" :items="categoryLinks" />
        </nav>
    </header>
</template>

<style scoped>

</style>