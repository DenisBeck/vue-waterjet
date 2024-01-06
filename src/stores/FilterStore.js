import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useFilterStore = defineStore('filterStore', () => {
    const filters = ref([])

    const fetchFilters = async () => {
        try {
            const { data } = await api.filters.getFilters()
            filters.value = data
        } catch (e) {
            console.log(e)
        }
    }

    const putFilters = async (filterData) => {
        try {
            const { data } = await api.filters.patchFilters(filterData)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        filters,
        fetchFilters,
        putFilters
    }
})