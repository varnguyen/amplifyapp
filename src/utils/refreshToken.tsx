import { httpRequest } from './index'

export const refreshToken = async (data: any) => {
    return await httpRequest({
        url: `uaa/auth/renew-token`,
        method: 'post',
        data
    })
}
