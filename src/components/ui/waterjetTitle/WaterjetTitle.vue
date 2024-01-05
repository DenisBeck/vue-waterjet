<script setup>
defineProps({
    label: String
})
</script>
<template>
    <h2 class="title text-2xl font-bold">{{ label }}</h2>
</template>

<style scoped>
.title {
    font-family: 'Roboto';
}
</style>