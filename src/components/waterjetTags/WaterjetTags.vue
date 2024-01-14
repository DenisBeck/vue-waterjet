<script setup>
import { computed } from 'vue'
import { WaterjetList } from '@/components/ui/waterjetList'
import { WaterjetButton } from '@/components/ui/waterjetButton'
const emit = defineEmits(['changeFilterValue', 'showMore'])
const props = defineProps({
    tags: Array,
    shownAll: Boolean
})

const shorted = computed(() => props.tags.slice(0, 3))
const moreItem = computed(() => props.shownAll ? 'скрыть' : 'еще')

const toggleActive = ([value]) => {
    emit('changeFilterValue', value)
}

</script>

<template>
    <div class="flex gap-2">
        <waterjet-list class="flex flex-wrap gap-2" :items="shownAll ? tags : shorted"  v-slot="slotProps">
            <waterjet-button
                theme="tag" 
                @handle-click="(args) => toggleActive(args)" 
                :label="slotProps.item.label" 
                :is-active="slotProps.item.value"/>
        </waterjet-list>
        <waterjet-button @handle-click="() => emit('showMore')" theme="tag" :label="moreItem"/>
    </div>
    
</template>