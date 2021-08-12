import { useState, useRef, useEffect } from 'react';
import classes from './Form.module.scss';

import { useUnit } from '../../store/unit-context';
import { useGeolocation } from '../../store/geolocation-context';
import { useCityData } from '../../store/city-context';
import { useWeatherData } from '../../store/weather-context';

const Form = (props) => {
	const inputRef = useRef();
	// context
	const [unit] = useUnit();
	const [geolocation, setGeolocation] = useGeolocation();
	const [cityData, setCityData] = useCityData();
	const [weatherData, setWeatherData] = useWeatherData();

	const [cityInputIsValid, setCityInputIsValid] = useState(false);
	const [cityInputTouched, setCityInputTouched] = useState(false);

	const getCityName = (lon, lat) => {
		fetch(
			`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=63711ece4bcfaa691a62cb55c0c063a2`
		).then(async (response) => {
			const cities = await response.json();
			getCityData(cities[0].name);
			localStorage.setItem('city', cities[0].name);
		});
	};

	const getCityData = (cityName) => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=63711ece4bcfaa691a62cb55c0c063a2`, {
			mode: 'cors',
		})
			.then(async (response) => {
				const cityDataJson = await response.json();

				const unitSign = unit ? 'metric' : 'imperial';
				getWeatherData(cityDataJson.coord.lon, cityDataJson.coord.lat, unitSign);

				if (cityDataJson.coord.lon) {
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
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=63711ece4bcfaa691a62cb55c0c063a2`,
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

		if (enteredCityName.trim().length === 0 || enteredCityName === undefined || cityData.errorText) {
			inputRef.current.value = '';
			setCityInputIsValid(false);
			return;
		}
		setCityInputIsValid(true);

		localStorage.setItem('city', enteredCityName);
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
		let coord = navigator.geolocation.getCurrentPosition((position) => {
			getCityName(position.coords.longitude, position.coords.latitude);
		});
		setGeolocation(false);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<span className={classes.magnifier}></span>
			<input
				ref={inputRef}
				type='search'
				className={`${classes.searchbar} ${inputClasses}`}
				placeholder='Search'
				onChange={inputChangeHandler}
			/>
		</form>
	);
};

export default Form;
