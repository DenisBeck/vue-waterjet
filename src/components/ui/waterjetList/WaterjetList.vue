<script setup>
import { WaterjetIcon } from '@/icons'
defineProps({
    items: Array,
    withIcons: Boolean,
    theme: String
})
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id" :class="{'even-odd': theme === 'evenOdd'}">
            <router-link v-if="item.link" class="hover:font-bold flex gap-3" :to="item.link"><waterjet-icon v-if="withIcons" :name="item.icon" />{{ item.value }}</router-link>
            <slot :item="item" />
        </li>
    </ul>
</template>

<style scoped>

</style>