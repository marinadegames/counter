import React from 'react';
import s from './App.module.css';
import {CopyTest} from "./CopyTest";
import {Counter} from "./Components/Counter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className={s.App}>
            <BrowserRouter>
                <Counter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
