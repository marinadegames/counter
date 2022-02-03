// imports
import {combineReducers, createStore } from "redux";
import {counterReducer} from "./counterReducer";


//types
export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

// reducer
const rootReducer = combineReducers( {
    counter: counterReducer
})


// exports
export const store = createStore(rootReducer)
