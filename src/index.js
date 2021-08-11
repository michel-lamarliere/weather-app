import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import SearchProvider from './store/search-context';
import UnitProvider from './store/unit-context';
import CityProvider from './store/city-context';
import WeatherProvider from './store/weather-context';

ReactDOM.render(
	<UnitProvider>
		<SearchProvider>
			<CityProvider>
				<WeatherProvider>
					<App />
				</WeatherProvider>
			</CityProvider>
		</SearchProvider>
	</UnitProvider>,
	document.getElementById('root')
);
