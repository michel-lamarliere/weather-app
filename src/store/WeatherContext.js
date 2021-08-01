import React, { useState } from 'react';

const WeatherContext = React.createContext();

const WeatherProvider = (props) => {
    const [weatherData, setWeatherData] = useState();

    return (
        <WeatherContext.Provider value={[weatherData, setWeatherData]}>
            {props.children}
        </WeatherContext.Provider>
    )
};

export default WeatherProvider;