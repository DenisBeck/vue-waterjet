<script setup>
import { computed } from "vue"
import { WaterjetButton } from "../ui/waterjetButton"
import { WaterjetCheckbox } from "../ui/waterjetCheckbox"
import { WaterjetInput } from "../ui/waterjetInput"

const props = defineProps({
    shops: Array,
    shopsWithProduct: Array
})
const shopsWithProductCount = computed(() => props.shops.map(shop => ({...shop, count: props.shopsWithProduct?.find(item => item.shop_id === shop.id)?.count || 0})))
</script>
<template>
    <div>
        <div class="flex mb-5 gap-5">
            <waterjet-input label="Магазин" class="border border-gray-300" icon="WaterjetSearch"/>
            <waterjet-checkbox v-if="shopsWithProduct" label="Забрать сегодня" />
            <waterjet-checkbox v-if="shopsWithProduct" label="Забрать в течение недели" />
        </div>
        <div class="flex flex-col gap-5">
            <div class="grid grid-cols-3 gap-2 font-bold" :class="{'grid-cols-5': shopsWithProduct}">
                <div>Адрес</div>
                <div>Режим работы</div>
                <div v-if="shopsWithProduct">Доступно</div>
                <div v-if="shopsWithProduct">Количество</div>
                <div></div>
            </div>
            <div v-for="shop in shopsWithProductCount" :key="shop.id"  class="grid grid-cols-3 gap-2 even-odd" :class="{'grid-cols-5': shopsWithProduct}">
                <div>{{ shop.address }}</div>
                <div>
                    <span v-for="scheduleItem in shop.schedule" :key="scheduleItem.day" class="flex gap-2.5 mb-2">
                        <span>{{ scheduleItem.day }}</span><span>{{ scheduleItem.time }}</span>
                    </span>
                </div>
                <div v-if="shopsWithProduct">
                    <span v-if="shop.count > 0">В наличии</span>
                    <span v-else>Нет в наличии</span>
                </div>
                <div v-if="shopsWithProduct">{{ shop.count }}</div>
                <div class="flex ">
                    <waterjet-button class="w-full" :label="shopsWithProduct ? 'Купить' : 'Узнать'" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>