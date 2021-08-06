import React from 'react';
import classes from './Daily.module.scss';

import arrow_up from '../../assets/img/arrow_up.svg';
import arrow_down from '../../assets/img/arrow_down.svg';

import { useWeatherData } from '../../store/WeatherContext';
import { useIcons } from '../../hooks/use-icons';

const Daily = () => {
    const [weatherData] = useWeatherData();

    const imgSrc = useIcons;

    // eslint-disable-next-line no-extend-native
    Date.prototype.addDays = function (d) {
        let today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + d + 1);

        let nextDays = '';
		switch (tomorrow.toUTCString().slice(0, 3)) {
			case 'Mon':
				nextDays = 'Monday';
				break;
			case 'Tue':
				nextDays = 'Tuesday';
				break;
			case 'Wed':
				nextDays = 'Wednesday';
				break;
			case 'Thu':
				nextDays = 'Thursday';
				break;
			case 'Fri':
				nextDays = 'Friday';
				break;
			case 'Sat':
				nextDays = 'Saturday';
				break;
			case 'Sun':
				nextDays = 'Sunday';
                break;
            default:
                nextDays = 'Error';
		}
        return nextDays;
	};
	
    // eslint-disable-next-line no-extend-native
    Date.prototype.addDate = function (d) {
        let today = new Date();
        let nextDays = new Date(new Date(today).getTime() + 60 * 60 * 24 * 1000 * d);
        let nextDaysString = nextDays.toUTCString();
        let result = nextDaysString.slice(5, 16);

		return result;
	};

	return (
		<div className={classes.container}>
			{weatherData &&
				weatherData.daily.slice(0, 7).map((day, index) => (
					<div className={classes.day} key={Math.random()}>
						<div className={classes.date}>
                            <div className={classes.date_day}>{new Date().addDays(index)}</div>
                            <div className={classes.date_date}>{new Date().addDate(index)}</div>
						</div>
						<div className={classes.minmax}>
							<div className={classes.minmax_div}>
								<img className={classes.minmax_div_img} src={arrow_up} alt='max temperature' />
								<div className={classes.minmax_div_text}>{day.temp.max.toFixed(0)}°</div>
							</div>
							<div className={classes.minmax_div}>
								<img className={classes.minmax_div_img} src={arrow_down} alt='min temperature' />
								<div className={classes.minmax_div_text}>{day.temp.min.toFixed(0)}°</div>
							</div>
						</div>
						<div className={classes.weather}>
							<img className={classes.weather_img} src={imgSrc(1, index)} alt='weather icon' />
						</div>
                        <div className={classes.temp}>{day.temp.day.toFixed(0)}°</div>
					</div>
				))}
		</div>
	);
};

export default Daily;
