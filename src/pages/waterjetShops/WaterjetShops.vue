<script setup>
import useShops from '@/composables/useShops'
import useBreadcrumbs from '@/composables/useBreadcrumbs'

import { WaterjetBreadcrumbs } from '@/components/waterjetBreadcrumbs';
import { WaterjetShopsBlock } from '@/components/waterjetShopsBlock';
import { onMounted } from 'vue';

const { initShops, shops } = useShops()
const { pathItems, initBreadcrumbs } = useBreadcrumbs()

onMounted(async() => {
    await initShops()
    initBreadcrumbs()
})

</script>

<template>
    <div class="max-w-screen-xl mx-auto px-5 mb-10 w-full">
        <waterjet-breadcrumbs :pathItems="pathItems" />
    </div>
    <section class="max-w-screen-xl mx-auto px-5 mb-20 w-full">
        <waterjet-shops-block :shops="shops" />
    </section>
</template>