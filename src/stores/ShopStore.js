import {defineStore} from 'pinia'
import { ref, computed } from 'vue'

import * as api from '@/api'

export const useShopStore = defineStore('ShopStore', () => {
    const shops = ref([])

    const currentShop = computed(() => shops.value[0])

    const fetchShops = async () => {
        try {
            const { data } = await api.shops.getShops()
            shops.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        shops,
        currentShop,
        fetchShops
    }
})