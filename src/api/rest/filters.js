import { makeRequest } from '../requestConfig'

export const getFilters = () => {
    return makeRequest({
        url: '/filters'
    })
}

export const patchFilters = (tags) => {
    return makeRequest({
        url: `/filters/1`,
        method: 'PATCH',
        data: tags
    })
}