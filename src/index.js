import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import SearchProvider from './store/SearchContext';
import UnitProvider from './store/UnitContext';
import CityProvider from './store/CityContext';
import WeatherProvider from './store/WeatherContext';

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
