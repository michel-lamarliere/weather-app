import React, { useState, useRef, useEffect, useCallback } from 'react';
import classes from './Form.module.scss';

import { useSearch } from '../../store/SearchContext';
import { useCityData } from '../../store/CityContext';

const Form = (props) => {
    const inputRef = useRef();
    // context
    const [searchInput, setSearchInput] = useSearch();
    const [cityData, setCityData] = useCityData();

    const [cityInputIsValid, setCityInputIsValid] = useState(false);
    const [cityInputTouched, setCityInputTouched] = useState(false);

    const getCityData = (cityName) => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=63711ece4bcfaa691a62cb55c0c063a2`, {
			mode: 'cors',
		})
        .then(async (response) => {
            const cityDataJson = await response.json();
            console.log(cityDataJson);

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
                console.log('hello');
            }

            getWeatherData(cityDataJson.coord.lat, cityDataJson.coord.lon, 'metric');

            console.log(`cityData App.js`);
            console.log(cityData);
        })
        .catch((error) => {
            setCityData((prevCityData) => ({
                ...prevCityData,
                errorText: 'Please enter a valid city name.',
            }));
        });
	};

	const getWeatherData = (lon, lat, unit) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=${unit}&appid=63711ece4bcfaa691a62cb55c0c063a2`,
			{ mode: 'cors' }
		)
        .then(async (response) => {
            const forecastJson = await response.json();
            console.log(forecastJson);
            console.log(cityData);
        })
        .catch((error) => {
            console.log(error);
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

        // props.onSearchSubmit();
        getCityData(searchInput)

        // setTimeout(() => {
        //     // props.onGettingData();
        //     getWeatherData(cityData.lat, cityData.lon, 'metric');
        // }, 500);
        setSearchInput('');
    };

    const cityInputIsInvalid = !cityInputIsValid && cityInputTouched;
    const inputClasses = cityInputIsInvalid ? `${classes['searchbar-error']}` : '';

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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
