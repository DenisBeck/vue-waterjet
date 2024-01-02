import WaterjetProductsItem from './WaterjetProductsItem.vue'

export default {
    title: 'ProductCard',
    component: { WaterjetProductsItem },
    args: {
        item: {
            "id": 2,
            "category_id": 3,
            "title": "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
            "image_url": "src/assets/img/waterjets/image2.png",
            "price_old": 1200475,
            "price_new": 1100475,
            "in_stock": [
                {
                    "shop_id": 1,
                    "count": 1
                },
                {
                    "shop_id": 2,
                    "count": 2
                },
                {
                    "shop_id": 3,
                    "count": 0
                },
                {
                    "shop_id": 4,
                    "count": 0
                }
            ]
        },
        actions: []
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetProductsItem },
        setup () {
            return { args }
        },
        template: '<waterjet-products-item v-bind="args" />'
    }),
    args: {
        action: false
    }
}

export const WithAction = {
    render: (args) => ({
        components: { WaterjetProductsItem },
        setup () {
            return { args }
        },
        template: '<waterjet-products-item v-bind="args" />'
    }),
    args: {
        action: true
    }
}

export const NotInStock = {
    render: (args) => ({
        components: { WaterjetProductsItem },
        setup () {
            return { args }
        },
        template: '<waterjet-products-item v-bind="args" />'
    }),
    args: {
        item: {
            "id": 2,
            "category_id": 3,
            "title": "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
            "image_url": "src/assets/img/waterjets/image2.png",
            "price_old": 1200475,
            "price_new": 1100475,
            "in_stock": []
        }
    }
}

export const WithSale = {
    render: (args) => ({
        components: { WaterjetProductsItem },
        setup () {
            return { args }
        },
        template: '<waterjet-products-item v-bind="args" />'
    }),
    args: {
        item: {
            "action": [
                {
                    "action_id": 1,
                }
            ],
            "id": 2,
            "category_id": 3,
            "title": "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
            "image_url": "src/assets/img/waterjets/image2.png",
            "price_old": 1200475,
            "price_new": 1100475,
            "in_stock": [
                {
                    "shop_id": 1,
                    "count": 1
                },
                {
                    "shop_id": 2,
                    "count": 2
                },
                {
                    "shop_id": 3,
                    "count": 0
                },
                {
                    "shop_id": 4,
                    "count": 0
                }
            ]
        }
    }
}