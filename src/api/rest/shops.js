import { makeRequest } from '../requestConfig'

export const getShops = () => {
    return makeRequest({
        url: '/shops'
    })
}