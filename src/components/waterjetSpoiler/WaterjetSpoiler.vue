<script setup>
import { ref } from 'vue'

import useFilters from '@/composables/useFilters'
import { WaterjetButton} from '@/components/ui/waterjetButton'
import { WaterjetFilterBlock } from '@/components/waterjetFilterBlock'
defineProps({
    spoilerItem: Object,
    theme: String
})
const open = ref(false)

const { setLocalFilters } = useFilters()

</script>

<template>
    <div>
        <waterjet-button :theme="theme" @handle-click="open = !open" :class="{'open': open}" class="spoiler-title text-base normal-case font-semibold text-gray-700 cursor-pointer hover:bg-transparent bg-transparent" :label="spoilerItem.label"/>
        <transition>
            <div v-show="open" :class="{'open': open}" class="overflow-hidden px-4 py-2">
                <div v-if="spoilerItem.content">{{ spoilerItem.content }}</div>
                <div v-else>
                    <waterjet-filter-block 
                        :type="spoilerItem.type" 
                        class="filter-block"
                        :additional="spoilerItem.label === 'Модель' ? {type: 'text', placeholder: 'Введите модель'} : null"
                        :no-check="spoilerItem.label === 'Акции'"
                        :options="spoilerItem.options" 
                        @change-filters="(filter) => setLocalFilters(spoilerItem.label, filter)"
                    />
                </div>
            </div>
        </transition>
    </div>
</template>

<style  scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease;
    max-height: 300px;
}

.v-enter-from,
.v-leave-to {
    transition: all 0.3s ease;
    max-height: 0;
}
.spoiler-title {
    position: relative;
    display: flex;
    align-items: center;
}
.spoiler-title::before {
    content: '\25BC';
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease 0s;
}
.spoiler-title.open::before {
    transform: rotate(180deg)
}
</style>