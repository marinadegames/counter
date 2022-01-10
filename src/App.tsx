import React from 'react';
import s from './App.module.css';
import {CopyTest} from "./CopyTest";
import {Counter} from "./Components/Counter";

function App() {
  return (
    <div className={s.App}>
      <Counter/>
    </div>
  );
}

export default App;
