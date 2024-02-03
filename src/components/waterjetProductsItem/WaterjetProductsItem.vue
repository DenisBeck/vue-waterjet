<script setup>
import { ref, computed } from 'vue'

import useShowmore from '@/composables/useShowmore'

import { WaterjetButton } from '@/components/ui/waterjetButton'
import { WaterjetRating } from '@/components/ui/waterjetRating'
import { WaterjetList } from '@/components/ui/waterjetList';

const props = defineProps({
    action: Boolean,
    item: Object,
    actions: Object,
    theme: String,
    features: Array
})
const { shownAll, moreItem, toggleShowmore } = useShowmore()

const shorted = computed(() => props.features.slice(0, 5))
const shownFeatures = computed(() => shownAll.value ? props.features : shorted.value)

const like = ref(false)
const actionIds = computed(() => {
    if(!props.item.action) return []
    return props.item.action.map(item => item.action_id)
})

const currentActions = computed(() => props.actions?.filter(action => actionIds.value.some(id => id === action.id)))

const toggleLike = () => {
    like.value = !like.value
}
const dropToCart = () => {

}

</script>

<template>
    <div v-if="theme === 'details' && item" class="grid md:grid-cols-2 gap-10">
        <div class="product-image relative flex flex-col items-center justify-between">
            <img class="object-contain w-full" :src="item.image_url" :alt="item.title">
            <div class="price text-center">
                <div class="text-slate-300 relative overflow-hidden text-2xl"><span class="absolute throwline"></span>{{ item.price_old }} ₽</div>
                <div class="font-bold text-4xl text-blue-700">{{ item.price_new }} ₽</div>
                <router-link class="text-xs text-blue-700 border-b cursor-pointer border-transparent hover:border-blue-700" to="/">Нашли дешевле? Снизим цену!</router-link>
            </div>
            <div v-if="currentActions?.length" class="absolute top-0 left-0 flex flex-col">
                <div v-for="action in currentActions" :key="action.id" class="bg-blue-700 text-white text-xs uppercase tracking-widest py-2 px-5">
                    {{ action.action_name }}
                </div>
            </div>
        </div>
        <div class="product-body flex flex-col justify-between">
            <div :class="{'font-bold': action}" class="product-text text-3xl font-bold mb-2 ">{{ item.title }}</div>
            <div class="product-code">Код товара: {{ item.code }}</div>
            <div class="flex items-center gap-2.5 mb-10">
                <waterjet-button @handle-click="toggleLike" :class="{'active': like}" class="bg-transparent hover:bg-transparent heart" icon="WaterjetHeartIcon" />
                <waterjet-rating :itemRating="item.rating" />
            </div>
            <div class="mb-10">
                <h3 class="font-bold w-fit text-xl border-b cursor-pointer border-transparent hover:border-blue-700 mb-2.5">Характеристики</h3>
                <div>
                    <waterjet-list :items="shownFeatures" v-slot="slotProps" class="flex flex-col gap-2.5">
                        <div class="grid grid-cols-2 gap-2" :item="slotProps.item">
                            <div>{{ slotProps.item.title }}</div>
                            <div>{{ slotProps.item.value }}</div>
                        </div>
                    </waterjet-list>
                    <waterjet-button :label="moreItem"  @handle-click="toggleShowmore" theme="showmore" />
                </div>
            </div>
            <waterjet-button label="Купить" @handle-click="dropToCart" />
        </div>
    </div>
    <div v-else-if="item" :class="{'product-item-inline': theme === 'inline'}" class="product-item border border-slate-300 relative h-full flex flex-col justify-between">
        <router-link :to="`/product/${item.id}`" class="product-image mt-10 flex justify-center mb-2 px-6 min-w-48 min-h-48">
            <img class="object-contain" :src="item.image_url" :alt="item.title">
        </router-link>
        <div class="product-body flex flex-col">
            <router-link :to="`/product/${item.id}`" :class="{'font-bold': action}" class="product-text text-lg text-center max-h-20 overflow-hidden mb-2 px-10">{{ item.title }}</router-link>
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
            <div v-else class="product-price mt-6 mb-8">
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

@media(min-width: 420px) {
    .product-item-inline.product-item .product-body {
        flex-direction: row;
        align-items: center;
    }
    .product-item-inline.product-item .product-image {
        margin: 0;
        max-height: 190px;
        max-width: 250px;
    }
    .product-item-inline.product-item .product-image img {
        max-height: 100%;
        object-fit: contain;
    }
    .product-item-inline.product-item {
        flex-direction: row;
        align-items: center;
    }
    .product-item-inline.product-item .product-price {
        padding-inline: 24px;
        white-space: nowrap;
        margin: 50px 0;
    }
    .product-item-inline.product-item .product-text {
        text-align: left;
        padding: 0;
    }
}
@media(min-width: 420px) and (max-width: 616px) {
    .product-item-inline.product-item .product-body {
        flex-direction: column;
        padding-right: 24px;
        align-items: flex-start;
        margin: 50px 0;
    }
    .product-item-inline.product-item .product-price {
        margin: 0;
        text-align: left;
        padding: 0;
    }
}
</style>