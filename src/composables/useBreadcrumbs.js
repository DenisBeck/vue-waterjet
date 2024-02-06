import { ref } from "vue"

import useCategories from "./useCategories"
import useProducts from "./useProducts"

export default () => {
    const { categories } = useCategories()
    const { products } = useProducts()

    const paths = ref(window.location.pathname.split('/'))
    const getTextByPathName = (pathName) => {
        switch(pathName) {
            case 'catalog':
                return 'Каталог';
            case 'shops':
                return 'Магазины';
            default:
                return '';
        }
    }
    const pathItems = ref([])
    const productCategory = ref(0)

    const initBreadcrumbs = (resourse, id) => {
        if(resourse === 'products') {
            productCategory.value = products.value?.find(item => item.id === +id)?.category_id
        }
        if(paths.value.length === 2) {
            pathItems.value = [{ text: 'Главная', href: '/' }, { text: getTextByPathName(paths.value[1]), href: `/${paths.value[1]}` }]
        }
        if(paths.value.length > 2 && resourse === 'categories') {
            pathItems.value = [
                { text: 'Главная', href: '/' }, 
                { text: 'Каталог', href: '/catalog' },
                { text: categories.value.find(item => item.id === +id)?.category_name, href: `/catalog/category/${id || 0}`}
            ]
        }
        if(paths.value.length > 2 && resourse === 'products') {
            pathItems.value = [
                { text: 'Главная', href: '/' }, 
                { text: 'Каталог', href: '/catalog' },
                { text: categories.value.find(item => item.id === +productCategory.value)?.category_name, href: `/catalog/category/${productCategory.value || 0}`},
                { text: products.value.find(item => item.id === +id)?.title, href: `/product/${id}`}
            ]
        }
    }
    
    return {
        pathItems,
        initBreadcrumbs,
    }
}