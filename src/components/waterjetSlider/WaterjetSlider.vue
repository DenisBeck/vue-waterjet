<script setup>
import { ref } from 'vue'
import { WaterjetButton } from '@/components/ui/waterjetButton';
const props = defineProps({
    slides: Object
})
const slideShift = ref(0)

const slideLeft = () => {
    if(slideShift.value <= 0) return
    slideShift.value--
}

const slideRight = () => {
    if(slideShift.value >= props.slides.length - 1) return
    slideShift.value++
}

const chooseSlide = ([label]) => {
    slideShift.value = label - 1
}

</script>

<template>
    <div class="slider overflow-hidden h-full min-h-96 relative">
        <div :style="{transform: `translateX(${-100 * slideShift}%)`}" class="flex w-full h-full min-h-full absolute top-0 bottom-0 transition duration-300">
            <div v-for="slide,key in slides" :key="slide.id" :style="{transform: `translateX(${100 * key}%)`}" class="slide w-full h-full absolute">
                <div class="h-full">
                    <img :src="slide.image_url" :alt="slide.text" class="object-cover w-full h-full" />
                </div>
                <div class="shadow-text absolute z-10 top-14 right-32 text-center text-white text-6xl font-bold w-96">{{ slide.text }}</div>
            </div>
        </div>
        <div class="absolute navigation top-1/2 -translate-y-1/2 justify-between text-white flex left-2 right-2">
            <waterjet-button :style="{'visibility': slideShift <= 0 ? 'hidden' : 'visible'}" @handle-click="() => slideLeft()" class="bg-transparent rounded-full hover:bg-slate-100 hover:text-blue-700" icon="WaterjetLeftIcon" />
            <waterjet-button :style="{'visibility': slideShift >= 5 ? 'hidden' : 'visible'}" @handle-click="() => slideRight()" class="bg-transparent rounded-full hover:bg-slate-100 hover:text-blue-700" icon="WaterjetRightIcon" />
        </div>
        <div class="absolute z-10 flex gap-x-2.5 left-1/2 -translate-x-1/2 bottom-10">
            <waterjet-button v-for="slide,key in slides" :key="slide.id" @handle-click="(args) => chooseSlide(args)"  :label="String(key + 1)" :class="{'active-pagination-item': slideShift === key}" class="bg-transparent hover:bg-transparent rounded-full h-3 w-3 basis-3 pagination-item"/>
        </div>
    </div>
</template>

<style>
.shadow-text {
    text-shadow: 2px 2px 3px black;
}
.navigation {
    transform: translateY(-50%)
}
.slider {
    flex: 1 1 940px;
}
.pagination-item {
    border: 1px solid white;
    font-size: 0;
    padding: 0;
}
.pagination-item.active-pagination-item {
    background: white
}
</style>