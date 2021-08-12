import React, { useState, useContext } from 'react';

const GeolocationContext = React.createContext();

export const useGeolocation = () => {
	return useContext(GeolocationContext);
};

const GeolocationContextProvider = (props) => {
    const [geolocation, setGeolocation] = useState(false);

    return (
        <GeolocationContext.Provider value={[geolocation, setGeolocation]}>
            {props.children}
        </GeolocationContext.Provider>
	);
};

export default GeolocationContextProvider;
