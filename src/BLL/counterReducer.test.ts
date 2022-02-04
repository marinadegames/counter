import {
    counterReducer,
    EndValueChangeAC,
    IncrementAC,
    ResetNumberDisplayAC,
    StartValueChangeAC
} from "./counterReducer";


test('INCREMENT', () => {

    const startState = {
        numberDisplay: 0,
        startValue: 0,
        endValue: 3,
    }

    const action = IncrementAC()
    const endState = counterReducer(startState, action)

    expect(endState.numberDisplay).toBe(startState.numberDisplay + 1)
})
test('RESET NUMBER DISPLAY', () => {

    const startState = {
        numberDisplay: 3,
        startValue: 0,
        endValue: 3,
    }

    const action = ResetNumberDisplayAC(startState.startValue)
    const endState = counterReducer(startState, action)

    expect(endState.numberDisplay).toBe(startState.startValue)
})
test('CHANGE START VALUE', () => {

    const startState = {
        numberDisplay: 3,
        startValue: 0,
        endValue: 3,
    }

    const newNumber = 5
    const action = StartValueChangeAC(newNumber)
    const endState = counterReducer(startState, action)

    expect(endState.startValue).toBe(newNumber)
})
test('CHANGE END VALUE', () => {

    const startState = {
        numberDisplay: 0,
        startValue: 0,
        endValue: 3,
    }

    const newNumber = 5
    const action = EndValueChangeAC(newNumber)
    const endState = counterReducer(startState, action)

    expect(endState.endValue).toBe(newNumber)
})