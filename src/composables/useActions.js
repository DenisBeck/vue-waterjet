import { storeToRefs } from 'pinia'

import { useActionStore } from '@/stores/ActionStore'

export default () => {
    const actionStore = useActionStore()
    const { actions } = storeToRefs(actionStore)
    const { fetchActions } = actionStore

    const initActions = async () => {
        if(!actions.value.length) {
            await fetchActions()
        } 
    }
    
    return {
        initActions,
        actions
    }
}