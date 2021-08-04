import React from 'react';
import './App.scss';

import Current from './components/Current/Current';
import Header from './components/Layout/Header';
import Hourly from './components/Hourly/Hourly';

function App(props) {
    return (
        <>
            <Header />
            <Current />
            <Hourly />
        </>
    );
}

export default App;
