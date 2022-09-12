import { createSlice } from "@reduxjs/toolkit";

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

export const { todoSetInitiated } = appSlice.actions

export default appSlice.reducer