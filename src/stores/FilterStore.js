import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useFilterStore = defineStore('filterStore', () => {
    const filters = ref([])

    const setLocalFilters = (label, filter) => {
        console.log(filters)
        const localFilters = filters.value.find(item => item.filters).filters
        const localFilter = localFilters.find(item => item.filter_name === label)
        const localProperty = localFilter.filter_options.find(item => item.label === filter.label)
        localProperty.value = filter.value
        console.log(filters)
    }

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
        putFilters,
        setLocalFilters
    }
})