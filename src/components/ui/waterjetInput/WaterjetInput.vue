<script setup>
defineProps({
    placeholder: String,
    text: String
})
const emit = defineEmits(['update:text'])
</script>

<template>
    <div class="min-w-50 flex items-center">
        <input 
            class="h-full w-full px-3 outline-none focus:border-slate-300 focus:placeholder:invisible" 
            :placeholder="placeholder"
            :value="text"
            @input="emit('update:text', $event.target.value)"
        />
    </div>
</template>