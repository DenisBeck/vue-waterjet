import WaterjetSkeleton from './WaterjetSkeleton.vue'

export default {
    title: 'ui/Skeleton',
    component: { WaterjetSkeleton },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetSkeleton },
        setup () {
            return { args }
        },
        template: '<waterjet-skeleton v-bind="args" />'
    }),
    args: {
    }
}

export const Square100x100 = {
    render: (args) => ({
        components: { WaterjetSkeleton },
        setup () {
            return { args }
        },
        template: '<waterjet-skeleton v-bind="args" />'
    }),
    args: {
        height: '100px',
        width: '100px'
    }
}

export const Round100 = {
    render: (args) => ({
        components: { WaterjetSkeleton },
        setup () {
            return { args }
        },
        template: '<waterjet-skeleton v-bind="args" />'
    }),
    args: {
        height: '100px',
        width: '100px',
        borderRadius: '50%'
    }
}