import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useProductStore = defineStore('ProductStore', () => {
    const products = ref([])

    const fetchProducts = async (id) => {
        try {
            const { data } = await api.products.getProducts(id)
            products.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        products,
        fetchProducts
    }
})