// imports
import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {counterReducer} from "./counterReducer";

//types
export type AppStateType = ReturnType<typeof rootReducer>

// reducer
const rootReducer = combineReducers( {
    counter: counterReducer
})

// exports
export const store = createStore(rootReducer, applyMiddleware(thunk))
