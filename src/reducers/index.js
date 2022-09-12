import { combineReducers } from "redux"
import appSlice from './appSlice'

const reducers = {
    app: appSlice
}
//IF SETUP CREATE STORE BY 'createStore' USE IT TO MERGE REDUCERS
export const combineReducersStore = combineReducers(reducers)

//IF SETUP STORE BY 'configureStore' THIS METHOD WILL AUTO MERGE REDUCERS
export default reducers //combineReducers(reducers) 