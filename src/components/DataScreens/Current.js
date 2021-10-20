import React, { useContext } from 'react';
import classes from './Current.module.scss';

import arrow_up from '../../assets/img/arrow_up.svg';
import arrow_down from '../../assets/img/arrow_down.svg';

import sunrise from '../../assets/img/sunrise.svg';
import sunset from '../../assets/img/sunset.svg';

import { CityContext } from '../../store/city-context';
import { WeatherContext } from '../../store/weather-context';

import { useIcons } from '../../hooks/use-icons';

const Current = () => {
	const [cityData] = useContext(CityContext);
	const [weatherData] = useContext(WeatherContext);

	const imgSrc = useIcons(0, 0);

	const getFullDate = (dataSource) => {
		let day = new Date((dataSource.dt + dataSource.timezone) * 1000).getDay();
		let date = new Date((dataSource.dt + dataSource.timezone) * 1000)
			.toUTCString()
			.slice(5, 16);

		let dayOfWeek = '';

		switch (day) {
			case 0:
				dayOfWeek = 'Sunday';
				break;
			case 1:
				dayOfWeek = 'Monday';
				break;
			case 2:
				dayOfWeek = 'Tuesday';
				break;
			case 3:
				dayOfWeek = 'Wednesday';
				break;
			case 4:
				dayOfWeek = 'Thursday';
				break;
			case 5:
				dayOfWeek = 'Friday';
				break;
			case 6:
				dayOfWeek = 'Saturday';
				break;
			default:
				dayOfWeek = 'Error';
		}
		let fullDate = `${dayOfWeek}, ${date}`;
		return fullDate;
	};

	const getSunriseSunset = (sunriseOrSunset) => {
		let hours = new Date(
			(sunriseOrSunset + weatherData.timezone_offset) * 1000
		).getUTCHours();
		if (hours.toString().length < 2) {
			hours = `0${hours}`;
		}

		let minutes = new Date(
			(sunriseOrSunset + weatherData.timezone_offset) * 1000
		).getUTCMinutes();

		if (minutes.toString().length < 2) {
			minutes = `0${minutes}`;
		}

		let time = `${hours}:${minutes}`;

		return time;
	};

	return (
		<div className={classes.current}>
			<div className={classes.error}>{cityData.errorText}</div>
			<div className={classes.city}>{cityData.city}</div>
			<img src={imgSrc} alt='icon' className={classes.weather} />
			<div className={classes.temp}>
				{weatherData && weatherData.hourly[0].temp.toFixed(0)}°
			</div>
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
			<div className={classes.date}>{getFullDate(cityData)}</div>
			<div className={classes.sunrise_sunset}>
				<div className={classes.sunrise_sunset_div}>
					<img src={sunrise} alt='sunrise time' />
					<div>
						{weatherData && getSunriseSunset(weatherData.current.sunrise)}
					</div>
				</div>
				<div className={classes.sunrise_sunset_div}>
					<img src={sunset} alt='sunset time' />
					<div>
						{weatherData && getSunriseSunset(weatherData.current.sunset)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Current;
