import React, { useEffect } from 'react';

import oneD from '../assets/img/01d.svg';
import twoD from '../assets/img/02d.svg';
import threeD from '../assets/img/03d.svg';
import fourD from '../assets/img/04d.svg';
import nineD from '../assets/img/09d.svg';
import tenD from '../assets/img/10d.svg';
import elevenD from '../assets/img/11d.svg';
import thirteenD from '../assets/img/13d.svg';
import fiftyD from '../assets/img/50d.svg';

import oneN from '../assets/img/01n.svg';
import twoN from '../assets/img/02n.svg';

import { useWeatherData } from '../store/WeatherContext';
import { useCityData } from '../store/CityContext';

export const useIcons = (interval, index) => {
	const [weatherData] = useWeatherData();
	const [cityData] = useCityData();

	let div;

	const getIcons = (json, time, sunrise, sunset) => {
		time = Number(time);

		if (json.weather[0].id >= 300 && json.weather[0].id <= 321) {
			div = nineD;
		} else if (json.weather[0].id >= 200 && json.weather[0].id <= 232) {
			div = elevenD;
		} else if (json.weather[0].id >= 500 && json.weather[0].id <= 504) {
			div = tenD;
		} else if (json.weather[0].id === 511) {
			div = thirteenD;
		} else if (json.weather[0].id >= 520 && json.weather[0].id <= 531) {
			div = nineD;
		} else if (json.weather[0].id >= 600 && json.weather[0].id <= 622) {
			div = thirteenD;
		} else if (json.weather[0].id >= 701 && json.weather[0].id <= 781) {
			div = fiftyD;
		}

		if (time >= sunrise && time <= sunset) {
			if (json.weather[0].id === 800) {
				div = oneD;
			} else if (json.weather[0].id === 801) {
				div = twoD;
			} else if (json.weather[0].id === 802) {
				div = threeD;
			} else if (json.weather[0].id === 803 || json.weather[0].id === 804) {
				div = fourD;
			}
		} else if ((time >= 0 && time <= sunrise) || time >= sunset) {
			if (json.weather[0].id === 800) {
				div = oneN;
			} else if (json.weather[0].id === 801) {
				div = twoN;
			} else if (json.weather[0].id === 802) {
				div = threeD;
			} else if (json.weather[0].id === 803 || json.weather[0].id === 804) {
				div = fourD;
			}
		}
		return div;
	};

	if (interval === 0) {
		// current and hourly
		const imgSrc =
			weatherData &&
			getIcons(
				weatherData.hourly[index],
				new Date((weatherData.hourly[index].dt + weatherData.timezone_offset) * 1000).getHours(),
				new Date((weatherData.current.sunrise + weatherData.timezone_offset) * 1000).getHours(),
				new Date((weatherData.current.sunset + weatherData.timezone_offset) * 1000).getHours()
			);
	} else if (interval === 1) {
		// daily
		const imgSrc =
			weatherData &&
			getIcons(
				weatherData.daily[index],
				new Date((weatherData.daily[index].dt + weatherData.timezone_offset) * 1000).getHours(),
				new Date((weatherData.current.sunrise + weatherData.timezone_offset) * 1000).getHours(),
				new Date((weatherData.current.sunset + weatherData.timezone_offset) * 1000).getHours()
			);
	}

	return div;
};
