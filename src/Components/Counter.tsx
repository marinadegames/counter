// imports
import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Counter.module.css'
import {Route, Routes} from "react-router-dom";
import {Settings} from "./Settings/Settings";
import {MainCounter} from "./MainCounter/MainCounter";
import {start} from "repl";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {incrementAC, resetNumberDisplayAC} from "../BLL/counterReducer";

// assets

// types

// components

export const Counter = () => {

    // data
    const numberDisplay = useSelector<AppStateType, number>(state => state.counter.numberDisplay)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const endValue = useSelector<AppStateType, number>(state => state.counter.endValue)

    const dispatch = useDispatch()


    // const [startValue, setStartValue] = useState<number>(0);
    // const [endValue, setEndValue] = useState<number>(5);
    // const [numberDisplay, setNumberDisplay] = useState<number>(startValue)
    // const [errorStartValue, setErrorStartValue] = useState(false)
    // const [errorEndValue, setErrorEndValue] = useState(false)
    //
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('numberDisplay')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setNumberDisplay(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('startValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setStartValue(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('endValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setEndValue(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('numberDisplay', JSON.stringify(numberDisplay))
    // }, [numberDisplay])
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])
    // useEffect(() => {
    //     localStorage.setItem('endValue', JSON.stringify(endValue))
    // }, [endValue])
    //
    // // callbacks
    const increment = () => {
        if (numberDisplay < endValue) dispatch(incrementAC())
    }

    const reset = () => dispatch(resetNumberDisplayAC(startValue))

    // const onChangeEndValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEndValue(e.currentTarget.valueAsNumber)
    //
    // }
    // const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     setStartValue(e.currentTarget.valueAsNumber)
    //     console.log(startValue, '<<>>tartValue')
    //     console.log(endValue, '<<endValue')
    //     if (e.currentTarget.valueAsNumber >= endValue) {
    //     }
    //     if (e.currentTarget.valueAsNumber < endValue){
    //         setNumberDisplay(startValue)
    //     }
    // }

    return (
        <div className={s.Counter}>
            <Routes>
                <Route path={'/'}
                       element={
                           <MainCounter startValue={startValue}
                                        numberDisplay={numberDisplay}
                                        reset={reset}
                                        increment={increment}
                                        endValue={endValue}
                           />}/>
                {/*<Route path={'/settings'} element={<Settings startValue={startValue}*/}
                {/*                                             onChangeMaxValue={onChangeEndValue}*/}
                {/*                                             onChangeStartValue={onChangeStartValue}*/}
                {/*                                             reset={reset}*/}
                {/*                                             errorStartValue={errorStartValue}*/}
                {/*                                             errorMaxValue={errorEndValue}*/}
                {/*                                             endValue={endValue}/>}/>*/}
            </Routes>
        </div>
    )
}
