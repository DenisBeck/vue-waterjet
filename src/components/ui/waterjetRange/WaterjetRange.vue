<script setup>
const props = defineProps({
    minValue: Number,
    maxValue: Number,
    modelValue: Number
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <input 
        type="range"
        :min="props.minValue"
        :max="props.maxValue"
        :value="props.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    />
</template>