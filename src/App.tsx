import React from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./BLL/store";

function App() {
    return (
        <div className={s.App}>
            <HashRouter>
                <Provider store={store}>
                    <Counter/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
