import React, { useState ,useContext } from 'react';

const CityContext = React.createContext();

export const useCityData = () => {
    return useContext(CityContext);
}

const CityProvider = (props) => {
    let [cityData, setCityData] = useState({
        city: undefined,
        lon: undefined,
        lat: undefined,
        dt: undefined,
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

export default CityProvider;
