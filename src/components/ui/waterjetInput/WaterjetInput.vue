<script setup>
// eslint-disable-next-line no-undef
const text = defineModel('text')
defineProps({
    placeholder: String,
    // text: String
})
// const emit = defineEmits(['update:text'])
</script>

<template>
    <div class="min-w-50 flex items-center">
        <!-- <input 
            class="h-full w-full px-3 outline-none focus:border-slate-300 focus:placeholder:invisible" 
            :placeholder="placeholder"
            :value="text"
            @input="emit('update:text', $event.target.value)"
        /> -->
        <input 
            class="h-full w-full px-3 outline-none focus:border-slate-300 focus:placeholder:invisible" 
            :placeholder="placeholder"
            v-model="text"
        />
    </div>
</template>