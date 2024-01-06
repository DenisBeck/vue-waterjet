import { makeRequest } from '../requestConfig'

export const getProducts = (id = null) => {
    let params = ''
    if (id) {
        params = `?category_id=${id}`
    }
    return makeRequest({
        url: `/products${params}`
    })
}
