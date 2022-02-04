// imports
import {Dispatch} from "redux"
import {AppStateType} from "./store";


// types
type ActionType =
    IncrementActionType
    | ResetNumberDisplay
    | StartValueChangeType
    | EndValueChangeType
    | SetNumberDisplayFromLocalStorageActionType
    | SetStartValueFromLocalStorageActionType
    | SetEndValueFromLocalStorageActionType

type InitialStateType = {
    numberDisplay: number
    startValue: number
    endValue: number
}
type IncrementActionType = {
    type: 'INCREMENT'
}
type ResetNumberDisplay = {
    type: 'RESET_NUMBER_DISPLAY',
    startValue: number
}
type StartValueChangeType = {
    type: 'START_VALUE_CHANGE',
    newNumber: number
}
type EndValueChangeType = {
    type: 'END_VALUE_CHANGE',
    newNumber: number
}
type SetNumberDisplayFromLocalStorageActionType = {
    type: 'SET_NUMBER_DISPLAY_FROM_LOCAL_STORAGE'
    value: number
}
type SetStartValueFromLocalStorageActionType = {
    type: 'SET_START_VALUE_FROM_LOCAL_STORAGE'
    value: number
}
type SetEndValueFromLocalStorageActionType = {
    type: 'SET_END_VALUE_FROM_LOCAL_STORAGE'
    value: number
}


// initialState
const initialState = {
    numberDisplay: 0,
    startValue: 0,
    endValue: 3,
}

// reducer
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, numberDisplay: state.numberDisplay + 1}
        case 'RESET_NUMBER_DISPLAY':
            return {...state, numberDisplay: state.startValue}
        case "START_VALUE_CHANGE":
            return {...state, startValue: action.newNumber}
        case "END_VALUE_CHANGE":
            return {...state, endValue: action.newNumber}
        case "SET_NUMBER_DISPLAY_FROM_LOCAL_STORAGE":
            return {...state, numberDisplay: action.value}
        case "SET_START_VALUE_FROM_LOCAL_STORAGE":
            return {...state, startValue: action.value}
        case "SET_END_VALUE_FROM_LOCAL_STORAGE":
            return {...state, endValue: action.value}
        default:
            return state
    }

}

// AC
export const IncrementAC = (): IncrementActionType => {
    return {type: 'INCREMENT'} as const
}
export const ResetNumberDisplayAC = (startValue: number): ResetNumberDisplay => {
    return {type: 'RESET_NUMBER_DISPLAY', startValue} as const
}
export const StartValueChangeAC = (newNumber: number): StartValueChangeType => {
    return {type: 'START_VALUE_CHANGE', newNumber} as const
}
export const EndValueChangeAC = (newNumber: number): EndValueChangeType => {
    return {type: 'END_VALUE_CHANGE', newNumber} as const
}
export const SetNumberDisplayFromLocalStorageAC = (value: number) => {
    return {type: 'SET_NUMBER_DISPLAY_FROM_LOCAL_STORAGE', value} as const
}
export const SetStartValueFromLocalStorageAC = (value: number) => {
    return {type: 'SET_START_VALUE_FROM_LOCAL_STORAGE', value} as const
}
export const SetEndValueFromLocalStorageAC = (value: number) => {
    return {type: 'SET_END_VALUE_FROM_LOCAL_STORAGE', value} as const
}

// THUNKS
export const IncrementTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
    let currentValue = getState().counter.numberDisplay
    localStorage.setItem('numberDisplay', JSON.stringify(currentValue + 1))
    dispatch(IncrementAC())
}
export const ResetNumberDisplayTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
    let currentValue = getState().counter.startValue
    localStorage.setItem('startValue', JSON.stringify(currentValue))
    dispatch(ResetNumberDisplayAC(currentValue))
}

export const StartValueTC = (value: number) => (dispatch: Dispatch) => {
    localStorage.setItem('startValue', JSON.stringify(value))
    dispatch(StartValueChangeAC(value))
}
export const EndValueTC = (value: number) => (dispatch: Dispatch) => {
    localStorage.setItem('endValue', JSON.stringify(value))
    dispatch(EndValueChangeAC(value))
}

export const setNumberDisplayFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('numberDisplay')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(SetNumberDisplayFromLocalStorageAC(newValue))
    }
}
export const setStartValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('startDisplay')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(SetStartValueFromLocalStorageAC(newValue))
    }
}
export const setEndValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('endValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(SetEndValueFromLocalStorageAC(newValue))
    }
}