import {defineStore} from 'pinia'
import { ref } from 'vue'

import * as api from '@/api'

export const useCountryStore = defineStore('CountryStore', () => {
    const countries = ref([])

    const fetchCountries = async () => {
        try {
            const { data } = await api.countries.getCountries()
            countries.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        countries,
        fetchCountries
    }
})