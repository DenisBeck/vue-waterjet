import WaterjetCategoriesItem from './WaterjetCategoriesItem.vue'

export default {
    title: 'CategoriesItem',
    component: { WaterjetCategoriesItem },
    args: {
        item: {
            "id": 3,
            "category_name": "Гидроциклы",
            "image_url": "src/assets/img/waterjets/jet_cat.png"
        }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetCategoriesItem },
        setup () {
            return { args }
        },
        template: '<waterjet-categories-item v-bind="args" />'
    }),
    args: {
    }
}