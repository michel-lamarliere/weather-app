import React, { useState } from 'react';

export const CityContext = React.createContext();

const CityContextProvider = (props) => {
    let [cityData, setCityData] = useState({
        city: undefined,
        lon: undefined,
        lat: undefined,
        dt: undefined,
        timezone: undefined,
        sunrise: undefined,
        sunset: undefined,
        errorText: undefined
    });

    return (
        <CityContext.Provider value={[cityData, setCityData]}>
            {props.children}
        </CityContext.Provider>
    )
};

export default CityContextProvider;
