// imports
import React, {ChangeEvent, useEffect} from "react";
import s from './Counter.module.css'
import {Route, Routes} from "react-router-dom";
import {Settings} from "./Settings/Settings";
import {MainCounter} from "./MainCounter/MainCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {
    EndValueTC,
    IncrementTC,
    ResetNumberDisplayTC,
    setEndValueFromLocalStorageTC,
    setNumberDisplayFromLocalStorageTC,
    setStartValueFromLocalStorageTC,
    StartValueTC
} from "../BLL/counterReducer";


// components
export const Counter = () => {

    // data
    const numberDisplay = useSelector<AppStateType, number>(state => state.counter.numberDisplay)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const endValue = useSelector<AppStateType, number>(state => state.counter.endValue)

    // functions
    const dispatch = useDispatch()
    const increment = () => {
        if (numberDisplay < endValue) dispatch(IncrementTC())
    }
    const reset = () => dispatch(ResetNumberDisplayTC())


    // useEffects
    useEffect(() => {
        dispatch(setNumberDisplayFromLocalStorageTC())
    }, [])
    useEffect(() => {
        dispatch(setStartValueFromLocalStorageTC())
    }, [])
    useEffect(() => {
        dispatch(setEndValueFromLocalStorageTC())
    }, [])


    // callbacks
    const onChangeEndValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(EndValueTC(e.currentTarget.valueAsNumber))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(StartValueTC(e.currentTarget.valueAsNumber))
    }

    // return
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
                <Route path={'/settings'} element={<Settings startValue={startValue}
                                                             reset={reset}
                                                             endValue={endValue}
                                                             onChangeEndValue={onChangeEndValue}
                                                             onChangeStartValue={onChangeStartValue}/>
                }/>
            </Routes>
        </div>
    )
}
