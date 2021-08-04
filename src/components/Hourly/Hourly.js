import React from 'react';
import classes from './Hourly.module.scss';

import { useWeatherData } from '../../store/WeatherContext';

const Hourly = () => {
    const [weatherData] = useWeatherData();

	Date.prototype.addHours = function (h) {
		this.setHours(this.getHours() + h);
		let rawNumber = this.getHours().toString();
        let newNumber = `${rawNumber}h`;
        if (rawNumber == new Date().getHours()) {
            newNumber = 'Now';
        }
		if (rawNumber.length < 2) {
			newNumber = `0${rawNumber}h`;
		}
		return newNumber;
	};

	return (
		<div className={classes.container}>
			{weatherData &&
				weatherData.hourly.slice(0, 12).map((hourlyTemp, index) => (
					<div className={classes.box} key={Math.random()}>
						<div className='hourly-box-time'>
							{new Date().addHours(index)}
						</div>
						<img className={classes.weather} src={ ''} alt='' />
						<div className='hourly-box-temp'>{hourlyTemp.temp.toFixed(0)}°</div>
					</div>
				))}
		</div>
	);
};

export default Hourly;
