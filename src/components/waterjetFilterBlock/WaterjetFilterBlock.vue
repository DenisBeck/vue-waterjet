<script setup>
import { computed, ref, onUnmounted } from "vue"

import useShowmore from '@/composables/useShowmore'

import { WaterjetButton } from "../ui/waterjetButton"
import { WaterjetCheckbox } from "../ui/waterjetCheckbox"
import { WaterjetInput } from "../ui/waterjetInput"
import { WaterjetSelect } from "../ui/waterjetSelect"
import { WaterjetDoubleRange } from "../waterjetDoubleRange"

const emit = defineEmits(['changeFilters'])
const props = defineProps({
    options: Array,
    type: String,
    additional: Object,
    noCheck: Boolean
})
const { shownAll, toggleShowmore, moreItem } = useShowmore();

const shorted = computed(() => props.options.length > 4 ? props.options.slice(0, 4) : props.options)
const shownOptions = computed(() => shownAll.value ? props.options : shorted.value)

const inputText = ref('')
const openDropdown = computed(() => !!inputText.value)
const filteredByInput = computed(() => props.options.filter(item => inputText.value.length ? item.label.toLowerCase().includes(inputText.value.toLowerCase()) : false ))


const closeDropdown = () => {
    openDropdown.value = false
    inputText.value = ''
}

window.addEventListener("click", closeDropdown, false)

onUnmounted(() => {
  window.removeEventListener("click", closeDropdown, false);
})

</script>
<template>
    <div v-if="type==='select'">
        <waterjet-select :options="options" />
    </div>
    <div v-else-if="type==='range'">
        <waterjet-double-range />
    </div>
    <div v-else>
        <div v-if="additional && additional.type === 'text'" @click.stop="" class="mb-5 relative">
            <waterjet-input 
                class="border border-slate-200 h-8 px-2 text-xs" 
                :placeholder="additional.placeholder" 
                v-model:text="inputText"
            />
            <ul v-if="openDropdown && filteredByInput.length" @click.stop="" class="absolute top-full left-0 bg-white p-5">
                <li v-for="option in filteredByInput" :key="option.id">
                    <waterjet-checkbox :noCheck="noCheck" @handle-change="(checked) => changeCheck(checked)" :checked="option.value" :label="option.label" :idName="`${option.label}-${option.id}`"/>
                </li>
            </ul>
        </div>
        <div v-if="type === 'checkbox'" class="flex items-center flex-wrap gap-y-2.5" :style="{'column-gap': noCheck ? '10px' : '28px'}">
            <waterjet-checkbox 
                v-for="option in shownOptions" 
                :key="option.id" 
                :noCheck="noCheck" 
                v-model:value="option.value"
                @update:value="emit('changeFilters', {label: option.label, value: option.value})"
                :label="option.label" 
                :idName="`${option.label}-${option.id}`"/>
        </div>
        <waterjet-button v-if="options.length > 4" :label="moreItem" theme="showmore" @handle-click="toggleShowmore"/>
    </div>
</template>