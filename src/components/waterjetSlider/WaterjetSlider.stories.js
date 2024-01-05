import WaterjetSlider from './WaterjetSlider.vue'

export default {
    title: 'Slider',
    component: { WaterjetSlider },
    argTypes: {
        default: {
            table: {
                category: 'Slots',
                type: {
                    summary: 'html',
                },
            }
        }
    },
    args: {
        navigation: true,
        pagination: true,
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
        ],
        default: `<div class="h-full">
            <img :src="slide.image_url" :alt="slide.text" class="object-cover w-full h-full" />
        </div>
        <div class="shadow-text absolute z-10 top-14 right-10 md:right-20 lg:right-32 text-center text-white text-2xl md:text-4xl lg:text-6xl font-bold w-32 md:w-48 lg:w-96">{{ slide.text }}</div>`
    }
}

export const Default = {
    render: (args) => ({
        components: { WaterjetSlider },
        setup () {
            return { args }
        },
        template: `<waterjet-slider v-bind="$props" >
            <template v-slot="props" v-html="args.default"/>
        </waterjet-slider>`
    }),
    args: {
    }
}