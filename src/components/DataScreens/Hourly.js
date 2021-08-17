import { useContext } from 'react';

import { useRef, useEffect } from 'react';
import classes from './Hourly.module.scss';

import { WeatherContext } from '../../store/weather-context';
import { useIcons } from '../../hooks/use-icons';
import { usePop } from '../../hooks/use-pop';
import { LeftButton, RightButton } from '../UI/Buttons';

const Hourly = () => {
	const [weatherData] = useContext(WeatherContext);
	const containerRef = useRef();

	const imgSrc = useIcons;
	const pop = usePop;

	let hourClass = '';

	const hourFormatter = (hour, index) => {
		let newHour = '';

		if (index === 0) {
			newHour = 'Now';
		} else {
			newHour = hour;
		}
		if (hour === 23) {
			hourClass = classes.box_midnight;
		}

		if (newHour.toString().length < 2) {
			newHour = `0${hour}h`;
		} else if (newHour.toString().length === 2) {
			newHour = `${hour}h`;
		}

		return newHour;
	};

	useEffect(() => {
		containerRef.current.scrollTo(0, 0);
	}, []);

	return (
		<div className={classes.container}>
			<LeftButton
				onClick={() =>
					containerRef.current.scrollBy({ left: -120, top: 0, behavior: 'smooth' })
				}
			/>
			<div ref={containerRef} className={classes.hourly}>
				{weatherData &&
					weatherData.hourly.slice(0, 24).map((hourlyTemp, index) => (
						<div className={`${classes.box} ${hourClass}`} key={Math.random()}>
							<div>
								{hourFormatter(
									new Date(
										(weatherData.hourly[index].dt +
											weatherData.timezone_offset) *
											1000
									).getUTCHours(),
									index
								)}
							</div>
							<div className={classes.weather}>
								<img
									className={classes.weather_img}
									src={imgSrc(0, index)}
									alt='weather icon'
								/>
								<div className={classes.weather_text}>
									{pop(weatherData.hourly[index].pop, imgSrc(0, index))}
								</div>
							</div>
							<div className='hourly-box-temp'>{hourlyTemp.temp.toFixed(0)}°</div>
						</div>
					))}
			</div>
			<RightButton
				onClick={() =>
					containerRef.current.scrollBy({
						left: 120,
						top: 0,
						behavior: 'smooth',
					})
				}
			/>
		</div>
	);
};

export default Hourly;
