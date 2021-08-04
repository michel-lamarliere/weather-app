import React from 'react';
import './App.scss';

import Header from './components/Layout/Header';
import Current from './components/Current/Current';
import Hourly from './components/Hourly/Hourly';
import Daily from './components/Daily/Daily';

function App(props) {
    return (
        <>
            <Header />
            <Current />
            <Hourly />
            <Daily />
        </>
    );
}

export default App;
