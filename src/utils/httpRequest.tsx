import axios from 'axios'
import { getTokenStorage, isAuthenticated } from './auth'
// import { redirect_page } from './redirect_page'
import { setLocalStorage, getLocalStorage, getSessionStorage, clearSiteData } from './storage'
import { refreshToken } from './refreshToken'

const windows = window as any
windows.is_expired = false

// create an axios instance
const http_request = axios.create({
    baseURL: 'https://randomuser.me', // base_url of api
    timeout: 1200000 // Request timeout
})

// request interceptor
http_request.interceptors.request.use(
    (config) => {
        if (isAuthenticated()) {
            config.headers['Authorization'] = 'Bearer ' + getTokenStorage()
        }
        config.headers['Content-Type'] = 'application/json'
        config.headers['Accept'] = '*/*'
        // console.log("config", config)
        // console.log(http_request.defaults.headers.common)
        return config
    },
    (error) => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response Interceptor
http_request.interceptors.response.use(
    (response) => {
        // console.log(response)
        const status = response.status
        if (status < 200 || status > 300) {
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    (error) => {
        const status = error.response.data.status

        console.log('error ', status)
        const originalRequest = error.config
        if (status === 401 && !originalRequest._retry && !windows.is_expired) {
            originalRequest._retry = true
            windows.is_expired = true
            const data_renew = {
                device_id: getLocalStorage('noti_key'),
                user_id: getSessionStorage('u_i').customer_id,
                token: getTokenStorage()
            }
            return refreshToken(data_renew)
                .then((res) => {
                    const token = res.data.token
                    setLocalStorage('token', token)
                    http_request.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    originalRequest.headers['Authorization'] = 'Bearer ' + token
                    windows.is_expired = false
                    return axios(originalRequest)
                })
                .catch((err) => {
                    clearSiteData()
                    console.log('_retry', err)
                    window.location.reload()
                })
        }
        if (status === 403) {
            // redirect_page('/403')
        }

        if (status === 404) {
            // redirect_page('/404');
        }
        return error.response.data || { status: 1 }
    }
)
export default http_request
