import WaterjetFilterBlock from './WaterjetFilterBlock.vue'

export default {
    title: 'FilterBlock',
    component: { WaterjetFilterBlock },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetFilterBlock },
        setup () {
            return { args }
        },
        template: '<waterjet-filter-block v-bind="args" />'
    }),
    args: {
        type: 'checkbox',
        options: [
            {
                "id": 1,
                "label": "В наличии",
                "value": false
            },
            {
                "id": 2,
                "label": "Под заказ",
                "value": false
            }
        ]
    }
}

export const WithShowmore = {
    render: (args) => ({
        components: { WaterjetFilterBlock },
        setup () {
            return { args }
        },
        template: '<waterjet-filter-block v-bind="args" />'
    }),
    args: {
        type: 'checkbox',
        options: [
            {
                "id": 1,
                "label": "В наличии",
                "value": false
            },
            {
                "id": 2,
                "label": "Под заказ",
                "value": false
            },
            {
                "id": 3,
                "label": "В наличии",
                "value": false
            },
            {
                "id": 4,
                "label": "Под заказ",
                "value": false
            },
            {
                "id": 5,
                "label": "В наличии",
                "value": false
            },
            {
                "id": 6,
                "label": "Под заказ",
                "value": false
            }
        ]
    }
}

export const WithInput = {
    render: (args) => ({
        components: { WaterjetFilterBlock },
        setup () {
            return { args }
        },
        template: '<waterjet-filter-block v-bind="args" />'
    }),
    args: {
        type: 'checkbox',
        additional: {
            type: 'text',
            placeholder: 'Введите модель'
        },
        options: [
            {
                "id": 1,
                "label": "Sea-doo Spark 1",
                "value": false
            },
            {
                "id": 2,
                "label": "Sea-doo Spark 2",
                "value": false
            },
            {
                "id": 1,
                "label": "Sea-doo Spark 3",
                "value": false
            },
            {
                "id": 2,
                "label": "Sea-doo Spark 4",
                "value": false
            }
        ]
    }
}

export const NoChecks = {
    render: (args) => ({
        components: { WaterjetFilterBlock },
        setup () {
            return { args }
        },
        template: '<waterjet-filter-block v-bind="args" />'
    }),
    args: {
        type: 'checkbox',
        options: [
            {
                "id": 1,
                "label": "В наличии",
                "value": false
            },
            {
                "id": 2,
                "label": "Под заказ",
                "value": false
            },
            {
                "id": 3,
                "label": "В наличии",
                "value": false
            },
            {
                "id": 4,
                "label": "Под заказ",
                "value": false
            }
        ],
        noCheck: true
    }
}

export const SelectFilter = {
    render: (args) => ({
        components: { WaterjetFilterBlock },
        setup () {
            return { args }
        },
        template: '<waterjet-filter-block v-bind="args" />'
    }),
    args: {
        type: 'select',
        options: [
            {
                "id": 1,
                "value": "90",
                "text": "90",
                "selected": true
            },
            {
                "id": 2,
                "value": "130",
                "text": "130",
                "selected": false
            },
            {
                "id": 3,
                "value": "154",
                "text": "154",
                "selected": false
            },
            {
                "id": 4,
                "value": "230",
                "text": "230",
                "selected": false
            },
            {
                "id": 5,
                "value": "300",
                "text": "300",
                "selected": false
            }
        ]
    }
}