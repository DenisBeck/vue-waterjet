
import { WaterjetCatalog } from '@/pages/waterjetCatalog'
import { WaterjetHome } from '@/pages/waterjetHome'
import { WaterjetShops } from '@/pages/waterjetShops'
import { WaterjetActions } from '@/pages/waterjetActions'
import { WaterjetDelivery } from '@/pages/waterjetDelivery'
import { WaterjetProduct } from '@/pages/waterjetProduct'

export default [
    {
        path: '/',
        name: 'home',
        component: WaterjetHome
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: WaterjetCatalog
    },
    {
        path: '/catalog/category/:id(\\d+)',
        name: 'catalog/category',
        component: WaterjetCatalog,
        props: true
    },
    {
        path: '/shops',
        name: 'shops',
        component: WaterjetShops
    },
    {
        path: '/actions',
        name: 'actions',
        component: WaterjetActions
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: WaterjetDelivery
    },
    {
        path: '/product/:id(\\d+)',
        name: 'product',
        component: WaterjetProduct,
        props: true
    }
]