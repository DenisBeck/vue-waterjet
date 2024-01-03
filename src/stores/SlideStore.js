import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useSlideStore = defineStore('SlideStore', () => {
    const slides = ref([])


    const fetchSlides = async () => {
        try {
            const { data } = await api.slides.getSlides()
            slides.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        slides,
        fetchSlides
    }
})