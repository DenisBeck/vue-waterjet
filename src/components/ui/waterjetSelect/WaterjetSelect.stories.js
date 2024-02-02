import WaterjetSelect from './WaterjetSelect.vue'

export default {
    title: 'ui/Select',
    component: { WaterjetSelect },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetSelect },
        setup () {WaterjetSelect
            return { args }
        },
        template: '<waterjet-select v-bind="args" />'
    }),
    args: {
        initialValue: 'Сортировать по',
        options: [
            {
                id: 1,
                value: 'favour',
                text: 'По полярности'
            },
            {
                id: 2,
                value: 'price_up',
                text: 'По цене (с недорогих)'
            },
            {
                id: 3,
                value: 'price_down',
                text: 'По цене (с дорогих)'
            },
            {
                id: 4,
                value: 'title',
                text: 'По Названию',
                selected: true
            }
        ]
    }
}