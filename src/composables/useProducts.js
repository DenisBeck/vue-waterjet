import { storeToRefs } from 'pinia'

import { useProductStore } from '@/stores/ProductStore'

export default () => {
    const productStore = useProductStore()
    const { products } = storeToRefs(productStore)
    const { fetchProducts } = productStore
    

    const initProducts = async () => {
        if(!products.value.length) {
            await fetchProducts()
        } 
    }
    
    return {
        initProducts,
        products
    }
}