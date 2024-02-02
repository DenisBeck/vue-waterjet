import { ref, computed } from 'vue'
export default () => {
    const shownAll = ref(false)
    const moreItem = computed(() => shownAll.value ? 'скрыть' : 'Показать еще')

    const toggleShowmore = () => {
        shownAll.value = !shownAll.value
    }
    
    return {
        toggleShowmore,
        shownAll,
        moreItem
    }
}