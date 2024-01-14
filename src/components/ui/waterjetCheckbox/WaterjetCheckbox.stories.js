import WaterjetCheckbox from './WaterjetCheckbox.vue'

export default {
    title: 'ui/Checkbox',
    component: { WaterjetCheckbox },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetCheckbox },
        setup () {
            return { args }
        },
        template: '<waterjet-checkbox v-bind="args" />'
    }),
    args: {
        idName: 'test-checkbox',
        label: 'Test Checkbox'
    }
}

export const WithoutCheck = {
    render: (args) => ({
        components: { WaterjetCheckbox },
        setup () {
            return { args }
        },
        template: '<waterjet-checkbox v-bind="args" />'
    }),
    args: {
        idName: 'test-checkbox',
        label: 'Test Checkbox',
        noCheck: true
    }
}