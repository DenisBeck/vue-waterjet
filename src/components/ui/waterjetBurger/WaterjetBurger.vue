<script setup>
const emit = defineEmits(['toggleMenu'])
defineProps({
    active: Boolean
})
</script>

<template>
    <button @click="emit('toggleMenu')" class="z-30 w-8 h-7">
        <span :style="{transform: active ? 'translateY(13px) rotate(45deg)' : 'rotate(0)'}" class="transition duration-300 absolute w-full h-0.5 right-0 top-0 bg-slate-700" /> 
        <span :style="{width: active ? '0' : '100%'}" class="transition duration-300 absolute  h-0.5 right-0 top-3.5 bg-slate-700" /> 
        <span :style="{transform: active ? 'translateY(-13px) rotate(-45deg)' : 'rotate(0)'}" class="transition duration-300 absolute w-full h-0.5 right-0 bottom-0 bg-slate-700" />
        <slot />
    </button>
</template>