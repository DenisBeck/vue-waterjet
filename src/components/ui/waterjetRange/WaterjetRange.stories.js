import WaterjetRange from './WaterjetRange.vue'

export default {
    title: 'ui/Range',
    component: { WaterjetRange },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetRange },
        setup () {
            return { args }
        },
        template: '<waterjet-range v-bind="args" />'
    }),
    args: {
        minValue: '0',
        maxValue: '100000',
        modelValue: '75000'
    }
}