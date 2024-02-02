import { storeToRefs } from 'pinia'
import { ref } from 'vue'

import { useFilterStore } from '@/stores/FilterStore'

export default () => {
    const filterStore = useFilterStore()
    const { filters } = storeToRefs(filterStore)
    const { fetchFilters, putFilters, setLocalFilters } = filterStore

    const spoilerItems = ref([])
    const filterTags = ref([])
    const sortOptions = ref([])

    const initFilters = async () => {
        if(!filters.value.length) {
            await fetchFilters()
            spoilerItems.value = filters.value.find(item => item.filters).filters.map(item => ({
                id: item.id, 
                label: item.filter_name, 
                options: item.filter_options, 
                type: item.filter_type,
                open: false
            }))
            filterTags.value = filters.value.find(item => item.tags).tags
            sortOptions.value = filters.value.find(item => item.options).options
        } 
    }
    
    return {
        setLocalFilters,
        putFilters,
        initFilters,
        filters,
        spoilerItems,
        filterTags,
        sortOptions
    }
}

