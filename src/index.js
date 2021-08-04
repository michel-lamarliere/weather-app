import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import SearchProvider from './store/SearchContext';
import CityProvider from './store/CityContext';
import WeatherProvider from './store/WeatherContext';

ReactDOM.render(
    <SearchProvider>
        <CityProvider>
            <WeatherProvider>
                <App />
            </WeatherProvider>
        </CityProvider>
    </SearchProvider>,
    document.getElementById('root')
);
