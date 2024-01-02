import { makeRequest } from '../requestConfig'

export const getActions = () => {
    return makeRequest({
        url: '/actions'
    })
}