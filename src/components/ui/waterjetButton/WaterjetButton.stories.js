import WaterjetButton from './WaterjetButton.vue'

export default {
    title: 'Button',
    component: { WaterjetButton },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetButton },
        setup () {
            return { args }
        },
        template: '<waterjet-button v-bind="args" />'
    }),
    args: {
    }
}

export const OnlyWithText = {
    render: (args) => ({
        components: { WaterjetButton },
        setup () {
            return { args }
        },
        template: '<waterjet-button v-bind="args" />'
    }),
    args: {
        label: 'Сохранить'
    }
}

export const OnlyWithIcon = {
    render: (args) => ({
        components: { WaterjetButton },
        setup () {
            return { args }
        },
        template: '<waterjet-button v-bind="args" />'
    }),
    args: {
        icon: 'WaterjetDeliveryIcon'
    }
}

export const WithTextAndIcon = {
    render: (args) => ({
        components: { WaterjetButton },
        setup () {
            return { args }
        },
        template: '<waterjet-button v-bind="args" />'
    }),
    args: {
        label: 'Сохранить',
        icon: 'WaterjetDeliveryIcon'
    }
}

export const Disabled = {

    render: (args) => ({
        components: { WaterjetButton },
        setup () {
            return { args }
        },
        template: '<app-button v-bind="args" />'
    }),
    args: {
        label: 'Follow',
        disabled: true
    }
}