import React, { useState, useRef, useEffect, useContext } from 'react';
import classes from './Form.module.scss';

import { UnitContext } from '../../store/unit-context';
import { GeolocationContext } from '../../store/geolocation-context';
import { CityContext } from '../../store/city-context';
import { WeatherContext } from '../../store/weather-context';
import { GeoButton, UnitButton } from '../UI/Buttons';

const Form = (props) => {
	const API_KEY = 'b410464e60720fdbe33be6b40ae2a43f';
	const inputRef = useRef();
	// context
	const [unit] = useContext(UnitContext);
	const { geo, prompt } = useContext(GeolocationContext);
	const [geolocation, setGeolocation] = geo;
	const [cityData, setCityData] = useContext(CityContext);
	const [weatherData, setWeatherData] = useContext(WeatherContext);

	const [cityInputIsValid, setCityInputIsValid] = useState(false);
	const [cityInputTouched, setCityInputTouched] = useState(false);

	const getCityName = (lon, lat) => {
		fetch(
			`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
		).then(async (response) => {
			const cities = await response.json();
			getCityData(cities[0].name);
			localStorage.setItem('city', cities[0].name);
		});
	};

	const getCityData = (cityName) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
			{
				mode: 'cors',
			}
		)
			.then(async (response) => {
				const cityDataJson = await response.json();

				const unitSign = unit ? 'metric' : 'imperial';
				getWeatherData(cityDataJson.coord.lon, cityDataJson.coord.lat, unitSign);

				if (cityDataJson.coord.lon) {
					localStorage.setItem('city', cityDataJson.name);
					setCityData((prevCityData) => {
						return {
							...prevCityData,
							city: cityDataJson.name,
							lon: cityDataJson.coord.lon,
							lat: cityDataJson.coord.lat,
							dt: cityDataJson.dt,
							timezone: cityDataJson.timezone,
							sunrise: cityDataJson.sys.sunrise,
							sunset: cityDataJson.sys.sunset,
							errorText: '',
						};
					});
				}
			})
			.catch((error) => {
				setCityData((prevCityData) => ({
					...prevCityData,
					errorText: 'Please enter a valid city name.',
				}));
				setCityInputIsValid(false);
			});
	};

	const getWeatherData = (lon, lat, unit) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=${API_KEY}`,
			{ mode: 'cors' }
		)
			.then(async (response) => {
				const forecastJson = await response.json();
				setWeatherData(forecastJson);
			})
			.catch((error) => {
				setCityData((prevCityData) => ({
					...prevCityData,
					errorText: 'Please enter a valid city name.',
				}));
			});
	};

	const inputChangeHandler = () => {
		setCityInputIsValid(true);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredCityName = inputRef.current.value;
		setCityInputTouched(true);

		if (enteredCityName.trim().length === 0 || enteredCityName === undefined) {
			inputRef.current.value = '';
			setCityInputIsValid(false);
			return;
		}
		setCityInputIsValid(true);

		// localStorage.setItem('city', enteredCityName);
		getCityData(enteredCityName);
		inputRef.current.value = '';
	};

	const cityInputIsInvalid = !cityInputIsValid && cityInputTouched;
	const inputClasses = cityInputIsInvalid ? classes.searchbar_error : '';

	const firstUpdate = useRef(true);

	useEffect(() => {
		inputRef.current.focus();

		if (localStorage.getItem('city')) {
			getCityData(localStorage.getItem('city'));
		} else {
			getCityData('toulouse');
		}

		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		getCityData(cityData.city);
	}, [unit]);

	if (geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			getCityName(position.coords.longitude, position.coords.latitude);
		});
		setGeolocation(false);
	}

	return (
		<div className={classes.wrapper}>
			<GeoButton />
			<form className={classes.form} onSubmit={submitHandler}>
				<span className={classes.magnifier}></span>
				<input
					ref={inputRef}
					type='text'
					className={`${classes.searchbar} ${inputClasses}`}
					placeholder='Search'
					onChange={inputChangeHandler}
				/>
			</form>
			<UnitButton />
		</div>
	);
};

export default Form;
