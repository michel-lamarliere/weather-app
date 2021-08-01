import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import SearchProvider from './store/SearchContext';
import CityProvider from './store/CityContext';

ReactDOM.render(
    <SearchProvider>
        <CityProvider>
            <App />
        </CityProvider>
    </SearchProvider>,
    document.getElementById('root')
);
