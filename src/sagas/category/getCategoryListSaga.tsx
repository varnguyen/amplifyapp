import { put, takeLatest } from 'redux-saga/effects'
import { httpRequest } from '../../utils'
import { TYPES } from '../../types'

export function* watchGetCategoryList() {
    yield takeLatest(TYPES.GET_CATEGORY_LIST, workGetCategoryList)
}

export function* workGetCategoryList({ url, method, params, callback }: any) {
    try {
        // Try to call the API
        const response = yield httpRequest({ url, method, params })
        console.log('response', response)
        // Dispatch the action to the reducers
        yield put({
            type: TYPES.GET_CATEGORY_LIST_SUCCESS,
            payload: response
        })
    } catch (error) {
        // Act on the error
        console.log('Request failed! Could not fetch data. workGetCategoryList')
        yield put({
            type: TYPES.GET_CATEGORY_LIST_FAILED,
            payload: []
        })
    }
}
