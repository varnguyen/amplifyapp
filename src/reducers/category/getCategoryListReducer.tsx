import { TYPES } from '../../types'

export const getCategoryListReducer = (state = {}, { type, payload }: any) => {
    switch (type) {
        case TYPES.GET_CATEGORY_LIST_SUCCESS:
            return { ...state, payload, success: true }
        case TYPES.GET_CATEGORY_LIST_FAILED:
            return { ...state, payload, success: false }
        default:
            return state
    }
}
