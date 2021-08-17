import React, { useState } from 'react';

export const WeatherContext = React.createContext();

const WeatherContextProvider = (props) => {
    const [weatherData, setWeatherData] = useState();

    return (
        <WeatherContext.Provider value={[weatherData, setWeatherData]}>
            {props.children}
        </WeatherContext.Provider>
    )
};

export default WeatherContextProvider;