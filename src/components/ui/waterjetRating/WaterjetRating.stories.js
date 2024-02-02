import WaterjetRating from './WaterjetRating.vue'

export default {
    title: 'ui/Rating',
    component: { WaterjetRating },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetRating },
        setup () {
            return { args }
        },
        template: '<waterjet-rating v-bind="args" />'
    }),
    args: {
        itemRating: 4
    }
}