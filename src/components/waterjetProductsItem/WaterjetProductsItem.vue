<script setup>
import { ref, computed } from 'vue'
import { WaterjetButton } from '../ui/waterjetButton';

const props = defineProps({
    action: Boolean,
    item: Object,
    actions: Object
})
const like = ref(false)
const actionIds = computed(() => {
    if(!props.item.action) return []
    return props.item.action.map(item => item.action_id)
})

const currentActions = computed(() => props.actions?.filter(action => actionIds.value.some(id => id === action.id)))

const toggleLike = () => {
    like.value = !like.value
}

</script>

<template>
    <div v-if="item" class="product-item border border-slate-300 relative h-full flex flex-col justify-between">
        <div class="mt-10 flex justify-center mb-2 px-6 min-w-48 min-h-48">
            <img class="object-contain" :src="item.image_url" :alt="item.title">
        </div>
        <div :class="{'font-bold': action}" class="text-lg text-center max-h-20 overflow-hidden mb-2 px-10">{{ item.title }}</div>
        <div v-if="action" class="bg-slate-200 flex items-center justify-center py-6 px-5">
            <p class="text-center text-lg flex flex-col">Акция действует до
                <span class="text-blue-700 font-bold">31.08.2020</span>
            </p>
            <div class="price absolute top-1 right-2.5 text-right">
                <div class="font-bold text-3xl text-blue-700">{{ item.price_new }} ₽</div>
                <div class="text-slate-300 relative overflow-hidden text-sm"><span class="absolute throwline"></span>{{ item.price_old }} ₽</div>
            </div>
            <div class="absolute top-0 left-0 bg-blue-700 text-white text-xs uppercase tracking-widest py-2 px-5">Акция</div>
        </div>
        <div v-else class="mt-6 mb-8">
            <div v-if="item.in_stock.length" class="text-3xl text-center text-blue-700 font-bold">
                <div class="price">{{ item.price_new }} ₽</div>
            </div>
            <div v-else class="text-center">
                <div class="text-lg font-bold">нет в наличии</div>
                <button class="text-blue-700 text-base underline">Сообщить о поступлении</button>
            </div>
            <waterjet-button v-if="item['in_stock'].length" class="absolute bottom-0 right-0 rounded-tl-xl" icon="WaterjetCartIcon" />
            <waterjet-button @handle-click="toggleLike" :class="{'active': like}" class="absolute top-0 right-0 bg-transparent hover:bg-transparent heart" icon="WaterjetHeartIcon" />
            <div v-if="currentActions?.length" class="absolute top-0 left-0 flex flex-col">
                <div v-for="action in currentActions" :key="action.id" class="bg-blue-700 text-white text-xs uppercase tracking-widest py-2 px-5">
                    {{ action.action_name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.price {
    font-family: 'Roboto';
}
.throwline {
    top: 2px;
    transform: rotate(-10deg);
    width: 100%;
    border-bottom: 1px solid rgb(203 213 225);
}
.product-item {
    width: 100%;
    transition: all 0.3s ease 0s;
}

.product-item:hover {
    box-shadow: 3px 3px 20px 0px rgba(50, 50, 50, 0.25);
}

</style>
<style>
.heart path:last-child {
    fill: rgb(29 78 216);
}
.heart path:first-child {
    fill: transparent;
}
.heart.active path:first-child {
    fill: rgb(29 78 216);
}
</style>