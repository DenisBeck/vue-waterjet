<!-- <script setup>
import { ref } from 'vue'
import { WaterjetRange } from "../ui/waterjetRange"
const props = defineProps({
    maxPrice: Number
})
const emit = defineEmits(['update:modelValue'])

const start = ref(200000)
</script>


<template>
    <div class="relative border border-slate-300">
        <waterjet-range 
            class="absolute w-full"
            :style="{width: `${(start / maxPrice) * 100}%`}"
            :min="start" 
            max="" 
            :value="props.modelValue"
            @input="emit('update:modelValue', $event.target.value)"
        />
        <waterjet-range
            class="absolute"
            min="0" 
            :max="maxPrice" 
            :value="start"
            @input="emit('update:modelValue', $event.target.value)"
        />
    </div>
</template> -->
<script>
import VueSlider from 'vue-slider-component'
import { WaterjetRange } from "../ui/waterjetRange"
import 'vue-slider-component/theme/antd.css'
export default {
    components: {
      VueSlider, WaterjetRange
    },
    data: function () {
      return {
        min: 0,
        max: 2000000,
        value: [100000, 500000],
      }
    }
  }
</script>

<template>
    <div>
        <waterjet-range
            class="hidden"
            :min="min" 
            :max="max"
            v-model="value[0]"
            name="min"
        />
        <waterjet-range
            class="hidden"
            :min="min" 
            :max="max"
            v-model="value[1]"
            name="max"
        />
        <vue-slider ref="slider" :min="min" :max="max" v-model="value" :enable-cross="false" :tooltip="'none'" :interval="1">
            <template v-slot:dot>
                <div class="w-2 h-2 bg-blue-700 rounded translate-y-1/3"></div>
            </template>
            <template v-slot:process="{ style }">
                <div class="vue-slider-process custom-class" :style="[style]"></div>
            </template>
        </vue-slider>
        <div class="flex items-end justify-between mt-4">
            <div class="text-sm flex items-center gap-3"><span class="text-gray-400">от</span><div class="font-bold range-value"> {{ value[0] }}</div></div>
            <div class="text-sm flex items-center gap-3"><span class="text-gray-400">до</span><div class="range-value font-bold"> {{ value[1] }}</div></div>
        </div>
    </div>
</template>

<style scoped>
.vue-slider-process.custom-class,
.vue-slider-process.custom-class:hover {
    background: #1C62CD;
}
.range-value {
    font-family: "Barlow";
}
</style>
