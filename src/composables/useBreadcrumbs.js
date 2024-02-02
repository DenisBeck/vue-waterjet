import { ref } from "vue"

import useCategories from "./useCategories"

export default () => {
    const { categories } = useCategories()


    const paths = ref(window.location.pathname.split('/'))
    const pathItems = ref([])

    const initBreadcrumbs = (id) => {
        if(paths.value.length === 2) {
            pathItems.value = [{ text: 'Главная', href: '/' }, { text: 'Каталог', href: '/catalog' }]
        }
        if(paths.value.length > 2) {
            pathItems.value = [
                { text: 'Главная', href: '/' }, 
                { text: 'Каталог', href: '/catalog' },
                { text: categories.value.find(item => item.id === +id)?.category_name, href: `/catalog/category/${id}`}
            ]
        }
    }
    
    return {
        pathItems,
        initBreadcrumbs,
    }
}