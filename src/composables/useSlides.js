import { storeToRefs } from 'pinia'

import { useSlideStore } from '@/stores/SlideStore'

export default () => {
    const slideStore = useSlideStore()
    const { slides } = storeToRefs(slideStore)
    const { fetchSlides } = slideStore
    

    const initSlides = async () => {
        if(!slides.value.length) {
            await fetchSlides()
        } 
    }
    
    return {
        initSlides,
        slides
    }
}