import WaterjetTabs from './WaterjetTabs.vue'

export default {
    title: 'Tabs',
    component: { WaterjetTabs },
    args: {
        tabItems: [
            {
                label: 'label 1',
                text: 'text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1'
            },
            {
                label: 'label 2',
                text: 'text 2text 2text 2tex 2 text2 text2 text 2text 2text 2text 1tex 1 text1 text 1text 1 text1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1'
            }
        ]
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetTabs },
        setup () {
            return { args }
        },
        template: '<waterjet-tabs v-bind="args" />'
    }),
    args: {
    }
}