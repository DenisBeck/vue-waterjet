<script setup>
import { ref, computed, onMounted } from 'vue'
import { WaterjetList } from '@/components/ui/waterjetList'
import { WaterjetButton } from '@/components/ui/waterjetButton'
const emit = defineEmits(['changeFilterValue'])
const props = defineProps({
    tags: Array
})

const shorted = computed(() => props.tags.slice(0, 3))
const shownAll = ref(false)
const moreItem = computed(() => shownAll.value ? 'скрыть' : 'еще')

const showMore = () => {
    shownAll.value = !shownAll.value
}

const toggleActive = ([value]) => {

    emit('changeFilterValue', value)
}
onMounted(() => console.log(props.tags))


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
        <waterjet-button @handle-click="showMore" theme="tag" :label="moreItem"/>
    </div>
    
</template>