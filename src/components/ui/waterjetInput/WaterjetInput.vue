<script setup>
defineProps({
    placeholder: String
})
</script>

<template>
    <div class="min-w-50 flex items-center">
        <input class="h-full w-full px-3 outline-none focus:border-slate-300 focus:placeholder:invisible" :placeholder="placeholder" v-model="text" />
    </div>
</template>