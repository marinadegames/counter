// imports
import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Settings.module.css'
import {NavLink} from "react-router-dom";


// types
type SettingsPropsType = {
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    endValue: number
    reset: () => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    errorStartValue: boolean
    errorMaxValue: boolean
}


// components
export const Settings = (
    {
        onChangeMaxValue,
        startValue,
        endValue,
        onChangeStartValue,
        ...props
    }: SettingsPropsType) => {




    return (
        <div className={s.Settings}>
            <div className={s.valueSettings}>
                <div className={startValue >= endValue ? s.inputError : s.div}>
                    start value:
                    <input type='number'
                           onChange={(e) => onChangeStartValue(e)}
                           value={startValue}/>

                </div>
                <div className={startValue >= endValue ? s.inputError : s.div}>
                    end value:
                    <input type='number'
                           className={props.errorMaxValue ? '' : ''}
                           onChange={(e) => onChangeMaxValue(e)}
                           value={endValue}/>
                </div>
            </div>
            <NavLink to={ startValue >= endValue ? '/settings' : '/'}
                     className={startValue >= endValue ? s.setValuesButtonError : s.setValuesButton}
                     onClick={startValue >= endValue ? () => {} : props.reset}>
                set
            </NavLink>
        </div>
    )
}
