<script setup>
import { ref } from 'vue'
defineProps({
    options: Array,
    initialValue: String
})
// const selectedText = computed(() => props.options.find(item => item.selected).text)
const selected = ref('')
</script>

<template>
    <select v-model="selected" class="h-8 border border-gray-200 px-5 outline-none focus:border-gray-400 text-sm cursor-pointer">
        <option v-if="initialValue" disabled value="">{{ initialValue }}</option>
        <option v-for="option in options" :selected="option.selected" :key="option.id" v-bind:value="option.value">{{ option.text }}</option>
    </select>
</template>