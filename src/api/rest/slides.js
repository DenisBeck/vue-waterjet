import { makeRequest } from '../requestConfig'

export const getSlides = () => {
    return makeRequest({
        url: '/slides'
    })
}