import { storeToRefs } from 'pinia'

import { useShopStore } from '@/stores/ShopStore'

export default () => {
    const shopStore = useShopStore()
    const { shops, currentShop } = storeToRefs(shopStore)
    const { fetchShops } = shopStore
    

    const initShops = async () => {
        if(!shops.value.length) {
            await fetchShops()
        } 
    }
    
    return { initShops, shops, currentShop }
}