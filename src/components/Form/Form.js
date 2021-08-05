import React, { useState, useRef, useEffect } from 'react';
import classes from './Form.module.scss';

import { useUnit } from '../../store/UnitContext';
import { useSearch } from '../../store/SearchContext';
import { useCityData } from '../../store/CityContext';
import { useWeatherData } from '../../store/WeatherContext';

const Form = (props) => {
    const inputRef = useRef();
    // context
    const [unit] = useUnit();
    const [searchInput, setSearchInput] = useSearch();
    const [cityData, setCityData] = useCityData();
    const [weatherData, setWeatherData] = useWeatherData();

    const [cityInputIsValid, setCityInputIsValid] = useState(false);
    const [cityInputTouched, setCityInputTouched] = useState(false);

    const getCityData = (cityName) => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=63711ece4bcfaa691a62cb55c0c063a2`, {
			mode: 'cors',
		})
        .then(async (response) => {
            const cityDataJson = await response.json();
            console.log(cityDataJson)

            const unitSign = unit ? 'metric' : 'imperial';
            getWeatherData(cityDataJson.coord.lon, cityDataJson.coord.lat, unitSign);

            if (cityDataJson.coord.lon) {
                setCityData((prevCityData) => {
                    return {
                        ...prevCityData,
                        city: cityDataJson.name,
                        lon: cityDataJson.coord.lon,
                        lat: cityDataJson.coord.lat,
                        sunrise: cityDataJson.sys.sunrise,
                        sunset: cityDataJson.sys.sunset,
                        errorText: '',
                    };
                });
            };
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
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=${unit}&appid=63711ece4bcfaa691a62cb55c0c063a2`,
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

    const inputChangeHandler = (event) => {
        setCityData((prevCityData) => {
            return {
                ...prevCityData,
                errorText: '',
            };
        });
        setSearchInput(event.target.value);
        setCityInputIsValid(true);
    };

    const searchHandler = (event) => {
        event.preventDefault();

        setCityInputTouched(true);

        if (searchInput === '' || searchInput === undefined || cityData.errorText) {
            setCityInputIsValid(false);
            return;
        }
        setCityInputIsValid(true);

        localStorage.setItem('city', searchInput);
        getCityData(searchInput);

        setSearchInput('');
    };

    const cityInputIsInvalid = !cityInputIsValid && cityInputTouched;
    const inputClasses = cityInputIsInvalid ? classes.searchbar_error : '';

    const firstUpdate = useRef(true);

    useEffect(() => {
        inputRef.current.focus();

        if (localStorage.getItem('city')) {
            getCityData(localStorage.getItem('city'));
        } else {
            // getCityData('toulouse');
            console.log('okay')
        }
        
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        };
        getCityData(cityData.city);
    }, [unit]);

    return (
        <form className={classes.form} onSubmit={searchHandler}>
            <span className={classes.magnifier}></span>
            <input
                type='search'
                className={`${classes.searchbar} ${inputClasses}`}
                placeholder='Search'
                value={searchInput}
                onChange={inputChangeHandler}
                ref={inputRef}
            />
        </form>
    )
}
        

export default Form;
