<script setup>
import { WaterjetList } from '@/components/ui/waterjetList'
import { WaterjetButton} from '@/components/ui/waterjetButton'
defineProps({
    spoilerItems: Array,
    theme: String
})

</script>

<template>
    <waterjet-list :items="spoilerItems"  v-slot="slotProps">
        <waterjet-button :theme="theme" @handle-click="slotProps.item.open = !slotProps.item.open" class="text-base normal-case font-semibold text-gray-700 cursor-pointer hover:bg-transparent bg-transparent" :label="slotProps.item.label"/>
        <transition>
            <div v-if="slotProps.item.open" :class="{'open': slotProps.item.open}" class="overflow-hidden">
                <div v-if="slotProps.item.content">{{ slotProps.item.content }}</div>
                <div v-else>
                    <slot :name="slotProps.item.id" />
                </div>
            </div>
            
        </transition>
   </waterjet-list>
</template>

<style  scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ;
    max-height: 300px;
}

.v-enter-from,
.v-leave-to {
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
    max-height: 0;
}
</style>