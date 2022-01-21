import React from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter";
import {BrowserRouter, HashRouter} from "react-router-dom";

function App() {
    return (
        <div className={s.App}>
            <HashRouter>
                <Counter/>
            </HashRouter>
        </div>
    );
}

export default App;
