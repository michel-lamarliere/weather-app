import React, { useState, useRef, useEffect } from 'react';
import classes from './Hourly.module.scss';

import { useWeatherData } from '../../store/WeatherContext';

const Hourly = () => {
	const [weatherData] = useWeatherData();
	const containerRef = useRef();

	let hourClass = '';

	// eslint-disable-next-line no-extend-native
	Date.prototype.addHours = function (h) {
		this.setHours(this.getHours() + h);
		let rawNumber = this.getHours().toString();
		let newNumber = `${rawNumber}h`;

		if (rawNumber === new Date().getHours().toString()) {
			newNumber = 'Now';
		}
		if (rawNumber.length < 2) {
			newNumber = `0${rawNumber}h`;
		}
		if (newNumber === '23h') {
			hourClass = classes.box_midnight;
		}

		return newNumber;
	};

	useEffect(() => {
		containerRef.current.scrollTo(0, 0);
	}, []);

	return (
		<div ref={containerRef} className={classes.container}>
			{weatherData &&
				weatherData.hourly.slice(0, 24).map((hourlyTemp, index) => (
					<div className={`${classes.box} ${hourClass}`} key={Math.random()}>
						<div className='hourly-box-time'>{new Date().addHours(index)}</div>
						<img className={classes.weather} src={''} alt='' />
						<div className='hourly-box-temp'>{hourlyTemp.temp.toFixed(0)}°</div>
					</div>
				))}
		</div>
	);
};

export default Hourly;
