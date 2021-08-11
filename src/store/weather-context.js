import React, { useState, useContext } from 'react';

const WeatherContext = React.createContext();

export const useWeatherData = () => {
    return useContext(WeatherContext);
};

const WeatherContextProvider = (props) => {
    const [weatherData, setWeatherData] = useState();

    return (
        <WeatherContext.Provider value={[weatherData, setWeatherData]}>
            {props.children}
        </WeatherContext.Provider>
    )
};

export default WeatherContextProvider;