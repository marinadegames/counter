// imports
import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Settings.module.css'
import {NavLink} from "react-router-dom";

// assets
type SettingsPropsType = {
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    maxValue: number
    reset: () => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}

// types

// components

export const Settings = ({onChangeMaxValue, startValue, maxValue, onChangeStartValue, ...props}: SettingsPropsType) => {

    const [errorStartValue, setErrorStartValue] = useState(false)
    const [errorMaxValue, setErrorMaxValue] = useState(false)

    useEffect( () => {

    }, [])

    return (
        <div className={s.Settings}>
            <div className={s.valueSettings}>
                <div  className={s.div}>
                    start value:
                    <input type='number'
                           className={errorStartValue ? s.inputError : ''}
                           onChange={(e) => onChangeStartValue(e)}
                           value={startValue}/>

                </div>
                <div className={s.div}>
                    max value:
                    <input type='number'
                           className={errorMaxValue ? '' : ''}
                           onChange={(e) => onChangeMaxValue(e)}
                           value={maxValue}/>
                </div>
            </div>
            <NavLink to={'/'}
                     className={s.setValuesButton}
                     onClick={props.reset}>
                set
            </NavLink>
        </div>
    )
}
