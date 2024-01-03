import WaterjetSlider from './WaterjetSlider.vue'

export default {
    title: 'Slider',
    component: { WaterjetSlider },
    args: {
        slides: [
            {
                "id": 1,
                "image_url": "src/assets/img/hero/slide1.jpg",
                "text": "Почувствуй скорость и режим"
            },
            {
                "id": 2,
                "image_url": "src/assets/img/hero/slide2.jpg",
                "text": "Почувствуй скорость и режим"
            },
            {
                "id": 3,
                "image_url": "src/assets/img/hero/slide3.jpg",
                "text": "Почувствуй скорость и режим"
            },
            {
                "id": 4,
                "image_url": "src/assets/img/hero/slide4.jpg",
                "text": "Почувствуй скорость и режим"
            },
            {
                "id": 5,
                "image_url": "src/assets/img/hero/slide5.jpg",
                "text": "Почувствуй скорость и режим"
            },
            {
                "id": 6,
                "image_url": "src/assets/img/hero/slide6.jpg",
                "text": "Почувствуй скорость и режим"
            }
        ]
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetSlider },
        setup () {
            return { args }
        },
        template: '<waterjet-slider v-bind="args" />'
    }),
    args: {
    }
}