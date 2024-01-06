<script setup>
import { ref, onUnmounted, computed } from 'vue'
import { WaterjetButton } from '@/components/ui/waterjetButton';
const props = defineProps({
    slides: Object,
    navigation: Boolean,
    pagination: Boolean,
    slidesOnPage: {
        type: Number,
        default: 1
    }
})
const slideShift = ref(0)
const size = ref(document.documentElement.clientWidth)
const slidesCountOnPage = computed(() => {
    if(size.value < 768) {
        return 1
    }
    if(size.value < 1024) {
        return Math.min(props.slidesOnPage, 2)
    }
    return props.slidesOnPage
})



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

const setSize = () => {
    size.value = document.documentElement.clientWidth
}

window.addEventListener("resize", setSize)

onUnmounted(() => {
  window.removeEventListener("resize", setSize);
})

</script>

<template>
    <div class="slider overflow-hidden h-full relative">
        <div :style="{transform: `translateX(${(-100 / slidesCountOnPage) * slideShift}%)`}" class="flex w-full h-full min-h-full absolute top-0 bottom-0 transition duration-300">
            <div v-for="slide,key in slides" :key="slide.id" :style="[{transform: `translateX(${100 * key}%)`}, {width: `${100 / slidesCountOnPage}%`}]" class="slide  h-full absolute">
                <slot :item="slide" />
            </div>
        </div>
        <div v-if="navigation" class="absolute navigation top-1/2 -translate-y-1/2 justify-between text-white flex left-4 right-4">
            <waterjet-button :style="{'visibility': slideShift <= 0 ? 'hidden' : 'visible'}" @handle-click="() => slideLeft()" class="bg-blue-300 rounded-full hover:bg-blue-500 text-black" icon="WaterjetLeftIcon" />
            <waterjet-button :style="{'visibility': slideShift >= slides.length - slidesCountOnPage ? 'hidden' : 'visible'}" @handle-click="() => slideRight()" class="bg-blue-300 rounded-full hover:bg-blue-500 text-black" icon="WaterjetRightIcon" />
        </div>
        <div v-if="pagination" class="absolute z-10 flex gap-x-2.5 left-1/2 -translate-x-1/2 bottom-10">
            <waterjet-button v-for="slide,key in slides" :key="slide.id" @handle-click="(args) => chooseSlide(args)"  :label="String(key + 1)" :class="{'active-pagination-item': slideShift === key}" class="bg-transparent hover:bg-transparent rounded-full h-3 w-3 basis-3 pagination-item"/>
        </div>
    </div>
</template>

<style>
.shadow-text {
    text-shadow: 2px 2px 3px black;
}
.navigation {
    transform: translateY(-50%);
}
.slider {
    flex: 1 1 940px;
    margin-inline: -10px;
}
.pagination-item {
    border: 1px solid white;
    font-size: 0;
    padding: 0;
}
.pagination-item.active-pagination-item {
    background: white
}
.slide {
    padding-inline: 10px;
}
</style>