// import Cookies from 'js-cookie'
// import { CONFIG } from 'configs'
import { getLocalStorage, setLocalStorage } from './storage'
import { isEmpty } from './validate'

// const { TOKEN_KEY, TOKEN_COOKIE_EXPIRES } = CONFIG

// const get_token_cookies = () => Cookies.get(TOKEN_KEY)

const getTokenStorage = (token = '') => getLocalStorage(token)

// const set_token_cookies = (token, remember = false) => {
// 	if (remember) {
// 		return Cookies.set(TOKEN_KEY, token, { "expires": TOKEN_COOKIE_EXPIRES })
// 	}
// 	return Cookies.set(TOKEN_KEY, token)
// }

const setAuthenticatedStorage = ({ token, user }: any, remember_me: any) => {
    const expires = new Date().getTime()
    setLocalStorage('token', token)
    // setLocalStorage("user", user)
    if (remember_me) {
        return setLocalStorage('expires_at', expires + 86400000 + '') // 24h
    }
    setLocalStorage('expires_at', expires + 3600000 + '') // 1h
}

// const remove_token_cookies = () => Cookies.remove(TOKEN_KEY)

const removeTokenStorage = () => {
    localStorage.clear()
    sessionStorage.clear()
}

const isAuthenticated = () => {
    try {
        const token = getTokenStorage('token')
        // const expires_at = getLocalStorage('expires_at')
        // const now = new Date().getTime()
        // if (!isEmpty(token) && !isEmpty(expires_at) && (now < expires_at)) {
        if (!isEmpty(token)) {
            return true
        } else {
            // removeTokenStorage()
            return false
        }
    } catch (error) {
        // removeTokenStorage()
        return false
    }
}

const hasPermission = (role = []) => {
    if (role && role instanceof Array && role.length > 0) {
        // const roles = getLocalStorage('user').roles
        // const permission_roles = role
        // const hasPermission = roles.some((r) => {
        //     return permission_roles.includes(r)
        // })
        const hasPermission = true
        if (!hasPermission) {
            return false
        }

        return true
    } else {
        console.error(`need roles! Like ['admin','editor']`)
        return false
    }
}

export { getTokenStorage, setAuthenticatedStorage, removeTokenStorage, isAuthenticated, hasPermission }
