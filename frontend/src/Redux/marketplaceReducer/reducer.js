import { API_DELETE_MY_SUCCESS, API_EDIT_MY_SUCCESS, API_FAILED, API_GET_MY_SUCCESS, API_GET_SUCCESS, API_POST_SUCCESS, API_REQUEST } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    marketData: [],
    myData: [],
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case API_REQUEST:
            return { ...state, isLoading: true }

        case API_POST_SUCCESS:
            return { ...state, isLoading: false }

        case API_GET_SUCCESS:
            return { ...state, isLoading: false, marketData: [...payload] }

        case API_GET_MY_SUCCESS:
            return { ...state, isLoading: false, myData: [...payload] }

        case API_EDIT_MY_SUCCESS:
            return { ...state, isLoading: false, }

        case API_DELETE_MY_SUCCESS:
            return { ...state, isLoading: false, }

        case API_FAILED:
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }
}