import { TYPES } from '../../types'

export const getCategoryListAction = (callback: any) => ({
    type: TYPES.GET_CATEGORY_LIST,
    url: `/api/`,
    method: 'get',
    params: {},
    callback
})
