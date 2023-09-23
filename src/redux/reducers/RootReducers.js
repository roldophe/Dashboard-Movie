import { combineReducers } from "@reduxjs/toolkit";
import { MovieReducers } from "./MovieReducers";
import { PeopleReducers } from "./PeopleReducers";
import { TrendingReducers } from "./TrendingReducers";

export const RootReducer = combineReducers({
    movReducer: MovieReducers,
    peopleReducer: PeopleReducers,
    trendingReducer: TrendingReducers
})