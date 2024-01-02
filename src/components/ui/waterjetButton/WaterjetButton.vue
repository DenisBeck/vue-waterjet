<script setup>
import { WaterjetIcon } from '@/icons'
const emit = defineEmits(['handleClick'])
defineProps({
    label: String,
    icon: String
})

</script>

<template>
    <button @click="emit('handleClick')" class="bg-blue-700 hover:bg-blue-500 transition duration-300 text-white uppercase flex items-center justify-center py-2.5 px-4 gap-2.5">
        <span v-if="label">{{ label }}</span>
        <span v-if="icon"><waterjet-icon :name="icon" /></span>
        <span v-if="!icon && !label">Default</span>
    </button>
</template>