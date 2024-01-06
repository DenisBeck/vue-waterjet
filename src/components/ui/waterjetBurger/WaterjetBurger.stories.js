import WaterjetBurger from "./WaterjetBurger.vue"

export default {
    title: 'ui/Burger',
    component: { WaterjetBurger },
    argTypes: {
        onClick: { action: 'click' }
    }
}

export const Default = {

    render: () => ({
        components: { WaterjetBurger },
        template: '<waterjet-burger v-bind="args" />'
    })
}
