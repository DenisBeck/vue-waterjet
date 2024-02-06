import { storeToRefs } from 'pinia'

import { useCategoryStore } from '@/stores/CategoryStore'
import { ref, computed } from 'vue'

export default () => {
    const categoryStore = useCategoryStore()
    const { categories } = storeToRefs(categoryStore)
    const { fetchCategories } = categoryStore

    const currentCategory = ref(null)
    const categoryLabels = computed(() => categories.value.map(item => ({ id: item.id, label: item.category_name })))

    const initCategories = async () => {
        if(!categories.value.length) {
            await fetchCategories()
        } 
    }
    
    return {
        initCategories,
        categories,
        currentCategory,
        categoryLabels
    }
}