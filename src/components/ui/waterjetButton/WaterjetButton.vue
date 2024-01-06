<script setup>
import { ref } from 'vue'
import { WaterjetIcon } from '@/icons'
const emit = defineEmits(['handleClick'])
const props = defineProps({
    label: String,
    icon: String,
    theme: String,
    isActive: Boolean
})

const active = ref(props.isActive || false)

</script>

<template>
    <button @click.prevent="emit('handleClick', [props.label, props.icon])" :class="{'tag': theme === 'tag', 'active': active }" class="bg-blue-700 hover:bg-blue-500 transition duration-300 text-white uppercase flex items-center justify-center py-2.5 px-4 gap-2.5">
        <span v-if="label">{{ label }}</span>
        <span v-if="icon"><waterjet-icon :name="icon" /></span>
        <span v-if="!icon && !label">Default</span>
    </button>
</template>

<style scoped>
.tag {
    border-radius: 3px;
    background: #F0F0F4;
    height: 25px;
    font-size: 14px;
    padding-inline: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2F3035;
    opacity: 0.7;
    min-width: 90px;
    text-transform: none;
}
.tag:hover {
    opacity: 1;
    background: #E0E0E4;
}
.tag.active {
    opacity: 1;
    background: #1C62CD;
    color: white;
}
</style>