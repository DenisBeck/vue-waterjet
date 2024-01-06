import { WaterjetHome } from '@/pages/waterjetHome'
import { WaterjetCatalog } from '@/pages/waterjetCatalog'
import WaterjetBreadcrumbs from './WaterjetBreadcrumbs.vue'
import { vueRouter } from 'storybook-vue3-router'

const customRoutes = [
    {
        path: '/',
        name: 'home',
        component: WaterjetHome 
    },
    {
        path: '/about',
        name: 'about',
        component: WaterjetCatalog 
    }
]

export default {
    title: 'Breadcrumbs',
    component: { WaterjetBreadcrumbs }
}

export const Default = {
    decorators: [
        vueRouter(customRoutes)
    ],
    render: (args) => ({
        components: { WaterjetBreadcrumbs },
        setup () {
            return { args }
        },
        template: '<waterjet-breadcrumbs v-bind="args" />'
    }),
    args: {
        pathItems: [
            {
                text: 'Главная',
                href: '/'
            },
            {
                text: 'Каталог',
                href: '/catalog'
            }
            

        ]
    }
}