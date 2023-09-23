import { ActionTypes } from "redux/action/ActionTypes";

const initialState = {
    movies: [],
    currentPage: 1,
    totalPages: 0,
}
export const MovieReducers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        //statement
        case ActionTypes.FECTCH_MOVIES:
            return {
                ...state,
                movies: payload.results,
                currentPage: payload.page,
                totalPages: payload.total_pages,
            };
        default:
            return state;
    }
} 