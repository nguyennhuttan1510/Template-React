import { all } from 'redux-saga/effects'
import { todoApp } from "../reducers/appSlice"

function * rootSagas() {
    yield all([
        todoApp()
    ])
}

export default rootSagas