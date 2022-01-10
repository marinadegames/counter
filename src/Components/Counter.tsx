// imports
import React, {ChangeEvent, useState} from "react";
import s from './Counter.module.css'
import {Route, Routes} from "react-router-dom";
import {Settings} from "./Settings/Settings";
import {MainCounter} from "./MainCounter/MainCounter";

// assets


// types


// components

export const Counter = () => {

    // data

    const [maxValue, setMaxValue]  = useState(5);
    const [startValue, setStartValue] = useState(0);
    const [numberDisplay, setNumberDisplay] = useState<number>(startValue)



    // callbacks
    const increment = () => {
        if (numberDisplay < maxValue) setNumberDisplay(numberDisplay + 1)
    }
    const reset = () => setNumberDisplay(startValue)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        reset()
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
        reset()
    }

    return (
        <div className={s.Counter}>
            <Routes>

                <Route path={'/'} element={<MainCounter numberDisplay={numberDisplay}
                                                        reset={reset}
                                                        startValue={startValue}
                                                        increment={increment}
                                                        maxValue={maxValue}/>}/>
                <Route path={'/settings'} element={<Settings onChangeMaxValue={onChangeMaxValue}
                                                             startValue={startValue}
                                                             onChangeStartValue={onChangeStartValue}
                                                             maxValue={maxValue}/>}/>
            </Routes>

        </div>
    )
}
