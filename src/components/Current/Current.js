import React, { useEffect } from 'react';
import classes from './Current.module.scss';

import arrow_up from '../../assets/img/arrow_up.svg';
import arrow_down from '../../assets/img/arrow_down.svg';

import sunrise from '../../assets/img/sunrise.svg';
import sunset from '../../assets/img/sunset.svg';

import { useCityData } from '../../store/CityContext';
import { useWeatherData } from '../../store/WeatherContext';

import { useIcons } from '../../hooks/use-icons';

const Current = (props) => {
	const [cityData] = useCityData();
    const [weatherData] = useWeatherData();
    
    const imgSrc = useIcons(0, 0);

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
    
    const getSunriseSunset = (sunriseOrSunset) => {
        let hours = new Date((sunriseOrSunset + weatherData.timezone_offset) * 1000).getHours();
        if (hours.toString().length < 2) {
			hours = `0${hours}`;
        }
        
        let minutes = new Date((sunriseOrSunset + weatherData.timezone_offset) * 1000).getMinutes();

        if (minutes.toString().length < 2) {
            minutes = `0${minutes}`
        }

        let time = `${hours}:${minutes}`

        return time;
    } 

	return (
		<div className={classes.current}>
			<div className={classes.city}>{cityData.city}</div>
			<img src={imgSrc} alt='icon' className={classes.weather} />
			<div className={classes.temp}>{weatherData && weatherData.hourly[0].temp.toFixed(0)}°</div>
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
			<div className={classes.date}>{`${day}, ${todayDate}`}</div>
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
			<div className={classes.error}>{cityData.errorText}</div>
		</div>
	);
};

export default Current;
