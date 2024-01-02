import WaterjetBurger from "./WaterjetBurger.vue"

export default {
    title: 'Burger',
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
