import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import GeolocationProvider from './store/geolocation-context';
import UnitProvider from './store/unit-context';
import CityProvider from './store/city-context';
import WeatherProvider from './store/weather-context';

ReactDOM.render(
	<UnitProvider>
		<GeolocationProvider>
			<CityProvider>
				<WeatherProvider>
					<App />
				</WeatherProvider>
			</CityProvider>
		</GeolocationProvider>
	</UnitProvider>,
	document.getElementById('root')
);
