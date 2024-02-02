import { storeToRefs } from 'pinia'

import { useCountryStore } from '@/stores/CountryStore'

export default () => {
    const countryStore = useCountryStore()
    const { countries } = storeToRefs(countryStore)
    const { fetchCountries } = countryStore

    const initCountries = async () => {
        if(!countries.value.length) {
            await fetchCountries()
        } 
    }
    
    return {
        initCountries,
        countries
    }
}