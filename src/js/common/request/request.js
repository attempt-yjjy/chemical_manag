import axios from 'axios'
import axiosConfig from '../../../json/request/request_config.js'

const instance = axios.create({
    baseURL: axiosConfig.baseUrl,
    timeout: axiosConfig.timeout
})

export default instance