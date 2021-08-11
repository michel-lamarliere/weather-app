import React, {useRef} from 'react';
import classes from './Daily.module.scss';

import arrow_up from '../../assets/img/arrow_up.svg';
import arrow_down from '../../assets/img/arrow_down.svg';

import { useWeatherData } from '../../store/weather-context';
import { useIcons } from '../../hooks/use-icons';
import { usePop } from '../../hooks/use-pop';

const Daily = () => {
    const [weatherData] = useWeatherData();
    const imgSrc = useIcons;
    const pop = usePop;

    const getDayOfWeek = (dataSource, index) => {
		let dayOfWeek = new Date((dataSource.daily[index].dt + dataSource.timezone_offset) * 1000).getDay();

        switch (dayOfWeek) {
            case 0:
                dayOfWeek = 'Monday';
                break;
            case 1:
                dayOfWeek = 'Tuesday';
                break;
            case 2:
                dayOfWeek = 'Wednesday';
                break;
            case 3:
                dayOfWeek = 'Thursday';
                break;
            case 4:
                dayOfWeek = 'Friday';
                break;
            case 5:
                dayOfWeek = 'Saturday';
                break;
            case 6:
                dayOfWeek = 'Sunday';
                break;
            default:
                dayOfWeek = 'Error';
        }

		return dayOfWeek;
	};

    const getDate = (dataSource, index) => {
        let date = new Date((dataSource.daily[index].dt + dataSource.timezone_offset) * 1000).toUTCString().slice(5, 16);

        return date;
    }

	return (
		<div className={classes.container}>
			{weatherData &&
				weatherData.daily.slice(0, 7).map((day, index) => (
					<div className={classes.day} key={Math.random()}>
						<div className={classes.date}>
							<div className={classes.date_day}>{getDayOfWeek(weatherData, index)}</div>
							<div className={classes.date_date}>{getDate(weatherData, index)}</div>
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
							<div className={classes.weather_pop}>
								{pop(weatherData.daily[index].pop, imgSrc(1, index))}
							</div>
						</div>
						<div className={classes.temp}>{day.temp.day.toFixed(0)}°</div>
					</div>
				))}
		</div>
	);
};

export default Daily;
