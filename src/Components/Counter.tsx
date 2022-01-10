// imports
import React, {useState} from "react";
import s from './Counter.module.css'
import {Display} from "./Display/Display";
import {ButtonsControl} from "./ButtonsControl/ButtonsControl";

// assets


// types


// components

export const Counter = (props: any) => {

    let maxValue = 5;
    let startValue = 0;

    // data
    const [numberDisplay, setNumberDisplay] = useState<number>(startValue)

    // callbacks
    const increment = () => {
        if (numberDisplay < maxValue) setNumberDisplay(numberDisplay + 1)
    }
    const reset = () => setNumberDisplay(startValue)

    return (
        <div className={s.Counter}>
            <Display numberDisplay={numberDisplay}
                     maxValue={maxValue}/>
            <ButtonsControl increment={increment}
                            reset={reset}/>
        </div>
    )
}
