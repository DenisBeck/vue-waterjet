import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useCategoryStore = defineStore('CategoryStore', () => {
    const categories = ref([])

    const fetchCategories = async () => {
        try {
            const { data } = await api.categories.getCategories()
            categories.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        categories,
        fetchCategories
    }
})