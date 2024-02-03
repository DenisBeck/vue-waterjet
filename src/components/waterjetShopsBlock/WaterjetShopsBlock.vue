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
        <div class="flex">
            <waterjet-input label="Магазин" />
            <waterjet-checkbox label="Забрать сегодня" />
            <waterjet-checkbox label="Забрать в течение недели" />
        </div>
        <div>
            <div class="grid grid-cols-5 gap-2 font-bold">
                <div>Адрес</div>
                <div>Режим работы</div>
                <div>Доступно</div>
                <div>Количество</div>
                <div></div>
            </div>
            <div v-for="shop in shopsWithProductCount" :key="shop.id"  class="grid grid-cols-5 gap-2">
                <div>{{ shop.address }}</div>
                <div>
                    <span v-for="scheduleItem in shop.schedule" :key="scheduleItem.day" class="flex gap-2.5 mb-2">
                        <span>{{ scheduleItem.day }}</span><span>{{ scheduleItem.time }}</span>
                    </span>
                </div>
                <div>
                    <span v-if="shop.count > 0">В наличии</span>
                    <span v-else>Нет в наличии</span>
                </div>
                <div>{{ shop.count }}</div>
                <div>
                    <waterjet-button label="Купить" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>