import { useEffect } from 'react';
import './App.scss';

import Backdrop from './components/UI/Backdrop';
import Modal from './components/UI/Modal';
import DataScreens from './components/DataScreens/DataScreens';
import Layout from './components/Layout/Layout';

function App(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Backdrop />
            <Modal />
            <Layout>
                <DataScreens />
            </Layout>
        </>
    );
}

export default App;
