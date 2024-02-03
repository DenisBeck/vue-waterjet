import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useProductStore = defineStore('ProductStore', () => {
    const isLoading = ref(false)
    const products = ref([])
    const error = ref(null)

    const fetchProducts = async () => {
        try {
            isLoading.value = true
            const { data } = await api.products.getProducts()
            products.value = data
        } catch (e) {
            error.value = { text: e.message }
            console.log(e)
        } finally {
            isLoading.value = false
        }
    }

    return {
        products,
        fetchProducts,
        isLoading,
        error
    }
})