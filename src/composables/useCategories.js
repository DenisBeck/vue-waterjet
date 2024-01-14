import { storeToRefs } from 'pinia'

import { useCategoryStore } from '@/stores/CategoryStore'

export default () => {
    const categoryStore = useCategoryStore()
    const { categories } = storeToRefs(categoryStore)
    const { fetchCategories } = categoryStore
    
    

    const initCategories = async () => {
        if(!categories.value.length) {
            await fetchCategories()
        } 
    }
    
    return {
        initCategories,
        categories
    }
}