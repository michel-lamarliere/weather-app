import React, { useEffect } from 'react';
import './App.scss';
import Current from './components/Current/Current';
import Header from './components/Layout/Header';

import { useSearch } from './store/SearchContext';
import { useCityData } from './store/CityContext';

function App(props) {
    // const [searchInput, setSearchInput] = useSearch();
    // const [cityData, setCityData] = useCityData();
    // console.log('render App');

    // useEffect(() => {
    //     console.log('useEffect App');
    // }, []);

    // const getCityData = (cityName) => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=63711ece4bcfaa691a62cb55c0c063a2`, {
    //         mode: 'cors',
    //     })
    //         .then(async (response) => {
    //             const cityDataJson = await response.json();
    //             console.log(cityDataJson);

    //             if (cityDataJson.coord.lon) {
    //                 setCityData((prevCityData) => {
    //                     return {
    //                         ...prevCityData,
    //                         city: cityDataJson.name,
    //                         lon: cityDataJson.coord.lon,
    //                         lat: cityDataJson.coord.lat,
    //                         sunrise: cityDataJson.sys.sunrise,
    //                         sunset: cityDataJson.sys.sunset,
    //                         errorText: '',
    //                     };
    //                 });
    //             }

    //             console.log(`cityData App.js`);
    //             console.log(cityData);
    //         })
    //         .catch((error) => {
    //             setCityData((prevCityData) => ({
    //                 ...prevCityData,
    //                 errorText: 'Please enter a valid city name.',
    //             }));
    //         });
    // };

    // const getWeatherData = (lon, lat, unit) => {
    //     fetch(
    //         `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=${unit}&appid=63711ece4bcfaa691a62cb55c0c063a2`,
    //         { mode: 'cors' }
    //     )
    //         .then(async (response) => {
    //             const forecastJson = await response.json();
    //             console.log(forecastJson);
    //             console.log(cityData);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    return (
        <>
            <Header
                // onSearchSubmit={() => getCityData(searchInput)}
                // onGettingData={() => getWeatherData(cityData.lon, cityData.lat, 'metric')}
            />
            <Current />
        </>
    );
}

export default App;
