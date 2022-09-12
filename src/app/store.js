import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { combineReducersStore } from './../reducers/index';
import rootSagas from "./middleware";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(combineReducersStore, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas)
