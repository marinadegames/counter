// imports
import React, {ChangeEvent} from "react";
import s from './Settings.module.css'
import {NavLink} from "react-router-dom";

// assets
type SettingsPropsType = {
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    maxValue: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}

// types

// components

export const Settings = ({onChangeMaxValue, startValue, maxValue, onChangeStartValue}: SettingsPropsType) => {
    return (
        <div className={s.Settings}>
            <div className={s.valueSettings}>
                <div className={s.div}>
                    start value:
                    <input type=''
                           onChange={(e) => onChangeStartValue(e)}
                           value={startValue}/>

                </div>
                <div className={s.div}>
                    max value:
                    <input type=""
                           onChange={(e) => onChangeMaxValue(e)}
                           value={maxValue}/>
                </div>
            </div>
            <NavLink to={'/'} className={s.setValuesButton}>
                set
            </NavLink>
        </div>
    )
}
