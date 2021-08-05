import React from 'react';
import classes from './Current.module.scss';

import arrow_up from '../../assets/img/arrow_up.svg';
import arrow_down from '../../assets/img/arrow_down.svg';

import { useCityData } from '../../store/CityContext';
import { useWeatherData } from '../../store/WeatherContext';

const Current = (props) => {
	const [cityData] = useCityData();
	const [weatherData] = useWeatherData();

	const date = new Date();
	const todayDate = new Date().toUTCString().slice(5, 16);

	let day = '';
	switch (date.getDay()) {
		case 0:
			day = 'Sunday';
			break;
		case 1:
			day = 'Monday';
			break;
		case 2:
			day = 'Tuesday';
			break;
		case 3:
			day = 'Wednesday';
			break;
		case 4:
			day = 'Thursday';
			break;
		case 5:
			day = 'Friday';
			break;
		case 6:
			day = 'Saturday';
			break;
		default:
			day = 'Error';
	}

	return (
		<div className={classes.current}>
			<div className={classes.city}>{cityData.city}</div>
			<img src='' alt='icon' className={classes.icon} />
			<div className={classes.temp}>{weatherData && weatherData.hourly[0].temp.toFixed(0)}°</div>
			<div className={classes.date}>{`${day}, ${todayDate}`}</div>
			<div className={classes.minmax}>
				<div className={classes['minmax-div']}>
					<img src={arrow_up} alt='max temperature' />
					<div className={classes['minmax-div-text']}>
						{weatherData && weatherData.daily[0].temp.max.toFixed(0)}°
					</div>
				</div>
				<div className={classes['minmax-div']}>
					<img src={arrow_down} alt='min temperature' />
					<div className={classes['minmax-div-text']}>
						{weatherData && weatherData.daily[0].temp.min.toFixed(0)}°
					</div>
				</div>
			</div>
			<div className={classes.error}>{cityData.errorText}</div>
		</div>
	);
};

export default Current;
