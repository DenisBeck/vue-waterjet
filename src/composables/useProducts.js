import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

import { useProductStore } from '@/stores/ProductStore'
import useFilters from '@/composables/useFilters'

import { findByFilterLabel } from '@/helpers/findByFilterLabel'

export default () => {
    const productStore = useProductStore()
    const { products } = storeToRefs(productStore)
    const { fetchProducts } = productStore
    const { spoilerItems } = useFilters()

    const categorizedProducts = ref(null)
    const filteredProducts = ref(null)
    

    const initProducts = async () => {
        if(!products.value.length) {
            await fetchProducts()
        } 
    }

    const renderProducts = (id) => {
        if(spoilerItems.value.length) {
            const power = findByFilterLabel(spoilerItems.value, 'Мощность, л.с.').options.find(item => item.selected).value
            console.log(findByFilterLabel(spoilerItems.value, 'Мощность двигателя л.с.'))
            const enginePower = findByFilterLabel(spoilerItems.value, 'Мощность двигателя л.с.').options.find(item => item.selected).value
            const filterProperties = computed(() => ({
                in_stock: findByFilterLabel(spoilerItems.value, 'Наличие').options[1].value === findByFilterLabel(spoilerItems.value, 'Наличие').options[0].value || findByFilterLabel(spoilerItems.value, 'Наличие').options[0].value,
                price: [findByFilterLabel(spoilerItems.value, 'Цена').options[0].value, findByFilterLabel(spoilerItems.value, 'Цена').options[1].value],
                power: [0, power],
                engine_power: [0, enginePower],
                speed_max: [0, findByFilterLabel(spoilerItems.value, 'Макс.скорость').options.find(item => item.selected).value],
                brand_id: findByFilterLabel(spoilerItems.value, 'Бренд').options.map(item => item.value),
                model_id: findByFilterLabel(spoilerItems.value, 'Модель').options.map(item => item.value),
                action: findByFilterLabel(spoilerItems.value, 'Акции').options.map(item => item.value),
                country_id: findByFilterLabel(spoilerItems.value, 'Страны').options.map(item => item.value),
            }))
            filteredProducts.value = products.value.filter(item => {
                return  item.in_stock === filterProperties.value.in_stock &&
                        item.price_new > filterProperties.value.price[0] && item.price_old < filterProperties.value.price[1] &&
                        item.power < filterProperties.value.power[1]
            })
        }
        categorizedProducts.value = products.value.filter(item => item.category_id === +id)
    }

    return {
        initProducts,
        products,
        renderProducts,
        categorizedProducts,
        filteredProducts
    }
}