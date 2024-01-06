import WaterjetInput from './WaterjetInput.vue'

export default {
    title: 'ui/Input',
    component: { WaterjetInput },
    argTypes: {
        onChange: { action: 'change' }
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetInput },
        setup () {
            return { args }
        },
        template: '<waterjet-input v-bind="args" />'
    }),
    args: {
        
    }
}

export const WithPlaceholder = {
    render: (args) => ({
        components: { WaterjetInput },
        setup () {
            return { args }
        },
        template: '<waterjet-input v-bind="args" />'
    }),
    args: {
        placeholder: 'Введите ваш e-mail:'
    }
}