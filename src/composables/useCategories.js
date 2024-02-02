import { storeToRefs } from 'pinia'

import { useCategoryStore } from '@/stores/CategoryStore'
import { ref } from 'vue'

export default () => {
    const categoryStore = useCategoryStore()
    const { categories } = storeToRefs(categoryStore)
    const { fetchCategories } = categoryStore

    const currentCategory = ref(null)

    const initCategories = async () => {
        if(!categories.value.length) {
            await fetchCategories()
        } 
    }
    
    return {
        initCategories,
        categories,
        currentCategory
    }
}