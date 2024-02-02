import { makeRequest } from '../requestConfig'

export const getCountries = () => {
    return makeRequest({
        url: '/countries'
    })
}