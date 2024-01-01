import axios from 'axios'

const baseURL = 'https://93251cf2639c28ab.mokky.dev'

export const makeRequest = ({ url, method = 'get', data = {}, headers = {} }) => axios({
    method,
    baseURL,
    url,
    data,
    headers
})
