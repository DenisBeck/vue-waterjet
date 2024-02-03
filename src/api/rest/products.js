import { makeRequest } from '../requestConfig'

export const getProducts = () => {
    return makeRequest({
        url: `/products`
    })
}
