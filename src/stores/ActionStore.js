import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useActionStore = defineStore('ActionStore', () => {
    const actions = ref([])

    const fetchActions = async () => {
        try {
            const { data } = await api.actions.getActions()
            actions.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        actions,
        fetchActions
    }
})