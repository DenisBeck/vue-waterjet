<script setup>
import { ref, onUnmounted } from "vue"


const size = ref(document.documentElement.clientWidth)

const setSize = () => {
    size.value = document.documentElement.clientWidth
}

window.addEventListener("resize", setSize)

onUnmounted(() => {
  window.removeEventListener("resize", setSize);
})
</script>

<template>
    <div>
        <img v-if="size > 767" src="@/assets/img/promo/image.jpg" alt="promo" class="object-contain w-full">
        <img v-else src="@/assets/img/promo/image_mobile.jpg" alt="promo mobile" class="object-contain w-full">
    </div>
</template>