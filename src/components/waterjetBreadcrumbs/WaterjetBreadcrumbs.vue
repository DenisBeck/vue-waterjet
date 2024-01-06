<script setup>
defineProps({
    pathItems: Array
})
</script>

<template>
    <ul class="flex gap-2.5 text-gray-400 text-sm">
        <li v-for="path,key in pathItems" :key="path.text">
            <router-link v-if="key < pathItems.length - 1" :to="path.href" class="mr-2.5 hover:text-gray-700">{{ path.text }}</router-link>
            <span v-else>{{ path.text }}</span>
            <span v-if="key < pathItems.length - 1">></span>
        </li>
    </ul>
</template>