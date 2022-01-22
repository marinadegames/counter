// imports
import React, {useState} from "react";
import s from './ButtonsControl.module.css'
import {NavLink} from "react-router-dom";


// assets


// types
type ButtonsControlPropsType = {
    increment: () => void
    reset: () => void
    maxValue: number
    numberDisplay: number
    startValue: number
}

// components

export const ButtonsControl = ({increment, reset, ...props}: ButtonsControlPropsType) => {
    return (
        <div className={s.ButtonsControl}>
            <div className={ props.numberDisplay === props.maxValue ? s.btnDisabled : s.btnActive}
                 onClick={increment}>inc</div>
            <div className={ props.numberDisplay === props.startValue ? s.btnDisabled : s.btnActive}
                 onClick={reset}>reset</div>

            <NavLink to={'/settings'} className={s.btnActive}>
                set
            </NavLink>

        </div>
    )
}
