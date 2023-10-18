import { SIGNIN_FAILED, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT_FAILED, SIGNOUT_REQUEST, SIGNOUT_SUCCESS, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: null,
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNIN_REQUEST:
            return { ...state, isLoading: true }

        case SIGNIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload }

        case SIGNIN_FAILED:
            return { ...state, isLoading: false, isError: true }

        case SIGNUP_REQUEST:
            return { ...state, isLoading: true }

        case SIGNUP_SUCCESS:
            return { ...state, isLoading: false }

        case SIGNUP_FAILED:
            return { ...state, isLoading: false, isError: true }

        case SIGNOUT_REQUEST:
            return { ...state, isLoading: true }

        case SIGNOUT_SUCCESS:
            return { ...state, isLoading: false, isAuth: false, token: null }

        case SIGNOUT_FAILED:
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }

}