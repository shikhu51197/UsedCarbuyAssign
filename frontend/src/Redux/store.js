import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as authReducer } from "./authReducer/reducer"
import { reducer as marketplaceReducer } from "./marketplaceReducer/reducer"
import { reducer as oemReducer } from "./oemReducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    marketplaceReducer,
    oemReducer,
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))