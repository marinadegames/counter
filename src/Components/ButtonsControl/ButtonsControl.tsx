// imports
import React from "react";
import s from './ButtonsControl.module.css'


// assets


// types
type ButtonsControlPropsType = {
    increment: () => void
    reset: () => void
}

// components

export const ButtonsControl = ({increment, reset, ...props}:any) => {



    return (
        <div className={s.ButtonsControl}>
            <button className={s.btnActive} onClick={increment}>inc</button>
            <button className={s.btnActive} onClick={reset}>reset</button>
            <button className={s.btnActive}>set</button>
        </div>
    )
}
