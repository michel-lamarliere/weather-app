import { useEffect } from 'react';
import './App.scss';

import Current from './components/DataScreens/Current';
import Hourly from './components/DataScreens/Hourly';
import Daily from './components/DataScreens/Daily';
import Layout from './components/Layout/Layout';

function App(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Layout>
            <Current />
            <Hourly />
            <Daily />
        </Layout>
    );
}

export default App;
