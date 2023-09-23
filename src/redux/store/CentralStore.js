import { applyMiddleware, compose, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { RootReducer } from "redux/reducers/RootReducers";

const middleWare =[thunk]
export const CentralStore = legacy_createStore(RootReducer,
    compose(applyMiddleware(...middleWare)));