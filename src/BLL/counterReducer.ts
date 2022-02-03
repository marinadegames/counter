// imports


// types
type ActionType = IncrementActionType | ResetNumberDisplay

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
    newStartValue: number
}
type EndValueChangeType = {
    type: 'END_VALUE_CHANGE',
    newEndValue: number
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
export const StartValueChangeAC = (newStartValue: number): StartValueChangeType => {
    return {type: 'START_VALUE_CHANGE', newStartValue} as const
}
export const EndValueChangeAC = (newEndValue: number): EndValueChangeType => {
    return {type: 'END_VALUE_CHANGE', newEndValue} as const
}

