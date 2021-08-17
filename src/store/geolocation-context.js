import React, { useState } from 'react';

export const GeolocationContext = React.createContext();

const GeolocationContextProvider = (props) => {
    const [promptGeolocation, setPromptGeolocation] = useState(true);
    const [geolocation, setGeolocation] = useState(false);

    return (
        <GeolocationContext.Provider value={{ geo: [geolocation, setGeolocation], prompt: [promptGeolocation, setPromptGeolocation] }}>
            {props.children}
        </GeolocationContext.Provider>
	);
};

export default GeolocationContextProvider;
