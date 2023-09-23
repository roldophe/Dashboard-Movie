import { ActionTypes } from "redux/action/ActionTypes";

const initialState = {
    people: [],
    currentPage: 1,
    totalPages: 0,
}
export const PeopleReducers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionTypes.FECTCH_PEOPLE:
            return {
                ...state,
                people: payload.results,
                currentPage: payload.page,
                totalPages: payload.total_pages,
            };
        default:
            return state;
    }
}