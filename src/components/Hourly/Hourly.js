import React, { useState, useRef, useEffect } from 'react';
import classes from './Hourly.module.scss';

import { useWeatherData } from '../../store/WeatherContext';
import { useIcons } from '../../hooks/use-icons';
import { LeftButton, RightButton } from '../UI/Buttons';

const Hourly = () => {
	const [weatherData] = useWeatherData();
    const containerRef = useRef();
    const buttonRef = useRef();

    const imgSrc = useIcons;

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
		<div className={classes.container}>
            <LeftButton onClick={() => containerRef.current.scrollBy({ left: -120, top: 0, behavior: 'smooth'})} />
			<div ref={containerRef} className={classes.hourly}>
				{weatherData &&
					weatherData.hourly.slice(0, 24).map((hourlyTemp, index) => (
						<div className={`${classes.box} ${hourClass}`} key={Math.random()}>
							<div className='hourly-box-time'>{new Date().addHours(index)}</div>
							<img className={classes.weather} src={imgSrc(0, index)} alt='weather icon' />
							<div className='hourly-box-temp'>{hourlyTemp.temp.toFixed(0)}°</div>
						</div>
					))}
			</div>
            <RightButton onClick={() => containerRef.current.scrollBy({
                left: 120, top
                :0, behavior: 'smooth'})} />
		</div>
	);
};

export default Hourly;
