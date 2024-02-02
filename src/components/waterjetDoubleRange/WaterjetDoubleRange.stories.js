import WaterjetDoubleRange from './WaterjetDoubleRange.vue'

export default {
    title: 'DoubleRange',
    component: { WaterjetDoubleRange },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetDoubleRange },
        setup () {
            return { args }
        },
        template: '<waterjet-double-range v-bind="args" />'
    }),
    args: {
        maxPrice: 1000000
    }
}