import 'regenerator-runtime/runtime'
import { all } from 'redux-saga/effects'

import { watchGetCategoryList } from './category/getCategoryListSaga'

export default function* rootSaga() {
    yield all([watchGetCategoryList()])
}
