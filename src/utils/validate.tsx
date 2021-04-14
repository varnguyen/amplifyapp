const isUrl = (url = '') => {
    // eslint-disable-next-line
    const urlregex = /^(https?|http|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(url)
}

const isLowerCase = (str = '') => {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

const isUpperCase = (str = '') => {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

const isAlphabets = (str = '') => {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

const isEmail = (email = '') => {
    // eslint-disable-next-line
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}

const isNil = (prop: any) => {
    return prop === null || prop === undefined
}

const isString = (object: any) => {
    return typeof object === 'string'
}

const isNumber = (object: any) => {
    return typeof object === 'number'
}

const isBoolean = (object: any) => {
    return typeof object === 'boolean'
}

const isArray = (object: any) => {
    return !isNil(object) && object.constructor === Array
}

const isEmpty = (value: any) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
}

export { isUrl, isEmail, isLowerCase, isUpperCase, isAlphabets, isNil, isString, isNumber, isBoolean, isArray, isEmpty }
