// imports
import React from "react";
import s from './MainCounter.module.css'
import {ButtonsControl} from "./ButtonsControl/ButtonsControl";
import {Display} from "./Display/Display";

// assets


// types
type MainCounterPropsType = {
    numberDisplay: number
    reset: () => void
    endValue: number
    increment: () => void
    startValue: number
}

// components

export const MainCounter = ({numberDisplay, reset, startValue, increment, endValue}:MainCounterPropsType) => {
    return (
        <div className={s.MainCounter}>
            <Display numberDisplay={numberDisplay}
                     endValue={endValue}/>
            <ButtonsControl reset={reset}
                            startValue={startValue}
                            increment={increment}
                            numberDisplay={numberDisplay}
                            endValue={endValue}/>
        </div>
    )
}
