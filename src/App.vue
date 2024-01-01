<script setup>
import { RouterView } from 'vue-router'

import { WaterjetHeader } from '@/components/waterjetHeader'
import { WaterjetFooter } from '@/components/waterjetFooter'
</script>

<template>
  <waterjet-header />
  <main>
    <router-view />
  </main>
  <waterjet-footer />
</template>

