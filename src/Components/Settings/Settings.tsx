// imports
import React, {ChangeEvent} from "react";
import s from './Settings.module.css'
import {NavLink} from "react-router-dom";


// types
type SettingsPropsType = {
    startValue: number
    endValue: number
    reset: () => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeEndValue: (e: ChangeEvent<HTMLInputElement>) => void

}


// components
export const Settings = ({ startValue, endValue, onChangeStartValue, onChangeEndValue, ...props }: SettingsPropsType) => {

    // functional


    // return
    return (
        <div className={s.Settings}>
            <div className={s.valueSettings}>
                <div className={startValue >= endValue ? s.inputError : s.div}>
                    Start value:
                    <input type='number'
                           onChange={(e) => onChangeStartValue(e)}
                           value={startValue}/>

                </div>
                <div className={startValue >= endValue ? s.inputError : s.div}>
                    End value:
                    <input type='number'
                           className={'errorMaxValue' ? '' : ''}
                           onChange={(e) => onChangeEndValue(e)}
                           value={endValue}/>
                </div>
                <div className={startValue >= endValue ? s.errorMessage : s.dontErrorMessage}>
                    ERROR! <u>End value</u> should be than <u>Start value!</u>
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
