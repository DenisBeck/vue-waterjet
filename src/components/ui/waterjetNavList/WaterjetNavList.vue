<script setup>
import { WaterjetIcon } from '@/icons'
defineProps({
    items: Array,
    withIcons: Boolean
})
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <router-link class="hover:font-bold flex gap-3" :to="item.link"><waterjet-icon v-if="withIcons" :name="item.icon" />{{ item.value }}</router-link>
        </li>
    </ul>
</template>

<style scoped>

</style>