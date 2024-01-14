import WaterjetSpoiler from './WaterjetSpoiler.vue'

export default {
    title: 'Spoiler',
    component: { WaterjetSpoiler },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetSpoiler },
        setup () {
            return { args }
        },
        template: '<waterjet-spoiler v-bind="args" />'
    }),
    args: {
        spoilerItems: [
            {
                id: 1,
                label: 'label1',
                open: false,
                content: 'content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 '
            },
            {
                id: 2,
                label: 'label2',
                open: false,
                content: 'content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 '
            },
            {
                id: 3,
                label: 'label3',
                open: false,
                content: 'content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 '
            }
        ]
    }
}