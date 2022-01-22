// imports
import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Counter.module.css'
import {Route, Routes} from "react-router-dom";
import {Settings} from "./Settings/Settings";
import {MainCounter} from "./MainCounter/MainCounter";

// assets

// types

// components

export const Counter = () => {

    // data
    const [startValue, setStartValue] = useState<number>(0);
    const [endValue, setEndValue] = useState<number>(5);
    const [numberDisplay, setNumberDisplay] = useState<number>(startValue)

    useEffect( () => {
        let valueAsString = localStorage.getItem('numberDisplay')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNumberDisplay(newValue)
        }
    },[])
    useEffect( () => {
        let valueAsString = localStorage.getItem('startValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    },[])
    useEffect( () => {
        let valueAsString = localStorage.getItem('endValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setEndValue(newValue)
        }
    },[])

    useEffect( () => {
        localStorage.setItem('numberDisplay', JSON.stringify(numberDisplay))
    }, [numberDisplay])
    useEffect( () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])
    useEffect( () => {
        localStorage.setItem('endValue', JSON.stringify(endValue))
    }, [endValue])

    // callbacks
    const increment = () => {
        if (numberDisplay < endValue) setNumberDisplay(numberDisplay + 1)
    }
    const reset = () => setNumberDisplay(startValue)
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setEndValue(e.currentTarget.valueAsNumber)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        setNumberDisplay(startValue)
    }

    return (
        <div className={s.Counter}>
            <Routes>
                <Route path={'/'} element={<MainCounter numberDisplay={numberDisplay}
                                                        reset={reset}
                                                        startValue={startValue}
                                                        increment={increment}
                                                        maxValue={endValue}/>}/>
                <Route path={'/settings'} element={<Settings onChangeMaxValue={onChangeMaxValue}
                                                             startValue={startValue}
                                                             onChangeStartValue={onChangeStartValue}
                                                             reset={reset}
                                                             maxValue={endValue}/>}/>
            </Routes>
        </div>
    )
}
