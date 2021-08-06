import React, { useEffect } from 'react';
import './App.scss';

import Header from './components/Layout/Header';
import Current from './components/Current/Current';
import Hourly from './components/Hourly/Hourly';
import Daily from './components/Daily/Daily';

function App(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
