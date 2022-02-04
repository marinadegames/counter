// imports


// types
type ActionType = IncrementActionType | ResetNumberDisplay | StartValueChangeType | EndValueChangeType

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
        default:
            return state
    }

}

// AC
export const incrementAC = (): IncrementActionType => {
    return {type: 'INCREMENT'} as const
}
export const resetNumberDisplayAC = (startValue: number): ResetNumberDisplay => {
    return {type: 'RESET_NUMBER_DISPLAY', startValue} as const
}
export const StartValueChangeAC = (newNumber: number): StartValueChangeType => {
    return {type: 'START_VALUE_CHANGE', newNumber} as const
}
export const EndValueChangeAC = (newNumber: number): EndValueChangeType => {
    return {type: 'END_VALUE_CHANGE', newNumber} as const
}

