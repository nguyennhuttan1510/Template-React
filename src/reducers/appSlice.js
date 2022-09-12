import { createSlice } from "@reduxjs/toolkit";
import { takeLatest, put } from "redux-saga/effects";

const initialState = {
    initial: 'state initial'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        todoSetInitiated: (state, action) => {
            state.initial = action.payload
        }
    }
})

//ACTION

function* handleAction(action) {
    yield put(todoSetInitiated(action.payload))
}

export function* todoApp() {
    yield takeLatest('ACTION_INITIAL', handleAction)
} 

export const { todoSetInitiated } = appSlice.actions

export default appSlice.reducer