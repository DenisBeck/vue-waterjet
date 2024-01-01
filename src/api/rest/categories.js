import { makeRequest } from '../requestConfig'

export const getCategories = () => {
    return makeRequest({
        url: '/categories'
    })
}