import { OEM_FAILED, OEM_GET_SUCCESS, OEM_REQUEST } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    oemData: [],
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case OEM_REQUEST:
            return { ...state, isLoading: true }

        case OEM_GET_SUCCESS:
            return { ...state, isLoading: false, oemData: [...payload] }

        case OEM_FAILED:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}