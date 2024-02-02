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
            ],
            "code": "366666-2",
            "features": {
                "country_id": 5,
                "brand_id": 1,
                "engine_method": "Переднеприводный",
                "model_id": 3,
                "seat_count": 3,
                "power": 155,
                "engine_type": "Бензиновый",
                "engine_power": 155,
                "manufacture_year": 2018,
                "speed_max": 230
            },
            "rating": 4,
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

export const InLine = {
    render: (args) => ({
        components: { WaterjetProductsItem },
        setup () {
            return { args }
        },
        template: '<waterjet-products-item v-bind="args" />'
    }),
    args: {
        theme: 'inline'
    }
}

export const InDetails = {
    render: (args) => ({
        components: { WaterjetProductsItem },
        setup () {
            return { args }
        },
        template: '<waterjet-products-item v-bind="args" />'
    }),
    args: {
        theme: 'details',
        countries: [
            {
                "id": 1,
                "country_name": "Россия"
            },
            {
                "id": 2,
                "country_name": "Германия"
            },
            {
                "id": 3,
                "country_name": "Китай"
            },
            {
                "id": 4,
                "country_name": "США"
            },
            {
                "id": 5,
                "country_name": "Канада"
            },
            {
                "id": 6,
                "country_name": "Республика Корея"
            }
        ]
    }
}