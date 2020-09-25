import axios from 'axios'
import axiosConfig from '../../../json/request/request_config.js'

const instance = axios.create({
    baseURL: axiosConfig.baseUrl,
    timeout: axiosConfig.timeout,
    headers:{"Content-Type":"application/json"}
})

export default instance