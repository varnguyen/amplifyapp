const isSetFiledLocal = (fieldName = '') => {
    try {
        const filedValue = localStorage.getItem(fieldName)
        if (filedValue !== null && filedValue !== 'null' && filedValue !== undefined && filedValue !== 'undefined' && filedValue !== '') {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

const removeStorage = (fieldName = '') => {
    localStorage.removeItem(fieldName)
}

const getLocalStorage = (fieldName = 'user_id', defaultRespone = null) => {
    try {
        return isSetFiledLocal(fieldName) ? JSON.parse(localStorage.getItem(fieldName) || '‰') : defaultRespone
    } catch (error) {
        return defaultRespone
    }
}

const setLocalStorage = (fieldName = 'storage', defaultRespone = '') => {
    localStorage.setItem(fieldName, JSON.stringify(defaultRespone))
}

const isSetFiledSession = (fieldName: string) => {
    try {
        const filedValue = sessionStorage.getItem(fieldName)
        if (filedValue !== null && filedValue !== 'null' && filedValue !== undefined && filedValue !== 'undefined' && filedValue !== '') {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

const getSessionStorage = (fieldName = 'user_id', defaultRespone = null) => {
    try {
        return isSetFiledSession(fieldName) ? JSON.parse(sessionStorage.getItem(fieldName) || '') : defaultRespone
    } catch (error) {
        return defaultRespone
    }
}

const setSessionStorage = (fieldName = 'storage', defaultRespone = '') => {
    sessionStorage.setItem(fieldName, JSON.stringify(defaultRespone))
}

const clearSiteData = () => {
    sessionStorage.clear()
    localStorage.clear()
}

export {
    isSetFiledLocal,
    getLocalStorage,
    setLocalStorage,
    isSetFiledSession,
    getSessionStorage,
    setSessionStorage,
    removeStorage,
    clearSiteData
}
