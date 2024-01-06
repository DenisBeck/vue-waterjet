import WaterjetTags from './WaterjetTags.vue'

export default {
    title: 'Tags',
    component: { WaterjetTags },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetTags },
        setup () {
            return { args }
        },
        template: '<waterjet-tags v-bind="args" />'
    }),
    args: {
        tags: [
            {id: 1, label: 'Полноприводные'}, 
            {id: 2, label: 'от 5000'}, 
            {id: 3, label: 'BRP'},
            {id: 1, label: 'до 100000'}, 
            {id: 2, label: 'Россия'}, 
            {id: 3, label: 'sale'}
        ]
    }
}