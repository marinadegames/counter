// imports
import React from "react";
import s from './Display.module.css'

// assets


// types
type DisplayPropsType = {
    numberDisplay: number
    endValue: number
}

// components

export const Display = (
    {
        numberDisplay,
        endValue
    } : DisplayPropsType) => {

    return (
        <div className={s.Display}>
            <div
                className={ numberDisplay === endValue ? s.numStyleStop : s.numStyle}>
                {numberDisplay}
            </div>
        </div>
    )
}
