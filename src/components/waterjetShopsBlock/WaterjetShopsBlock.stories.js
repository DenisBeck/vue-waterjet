import WaterjetShopsBlock from './WaterjetShopsBlock.vue'

export default {
    title: 'ShopsBlock',
    component: { WaterjetShopsBlock },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetShopsBlock },
        setup () {
            return { args }
        },
        template: '<waterjet-shops-block v-bind="args" />'
    }),
    args: {
        shops: [
            {
                "id": 1,
                "address": "Москва, ул. Науки 25",
                "schedule": [
                    {
                        "day": "пн-сб",
                        "time": "08:00-19:00"
                    },
                    {
                        "day": "вс",
                        "time": "09:00-17:00"
                    }
                ]
            },
            {
                "id": 2,
                "address": "Москва, ул.  Южная 134",
                "schedule": [
                    {
                        "day": "пн-сб",
                        "time": "08:00-19:00"
                    },
                    {
                        "day": "вс",
                        "time": "09:00-17:00"
                    }
                ]
            },
            {
                "id": 3,
                "address": "Санкт-Петербург, ул. Красная 19",
                "schedule": [
                    {
                        "day": "пн-сб",
                        "time": "08:00-19:00"
                    },
                    {
                        "day": "вс",
                        "time": "09:00-17:00"
                    }
                ]
            },
            {
                "id": 4,
                "address": "Киев, ул Шевченко 167",
                "schedule": [
                    {
                        "day": "пн-сб",
                        "time": "08:00-19:00"
                    },
                    {
                        "day": "вс",
                        "time": "09:00-17:00"
                    }
                ]
            }
        ],
        shopsWithProduct: [
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