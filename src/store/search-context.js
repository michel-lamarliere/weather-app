import React, { useState, useContext } from 'react';

const SearchContext = React.createContext();
const GeolocationContext = React.createContext();

export const useSearch = () => {
    return useContext(SearchContext);
};

export const useGeolocation = () => {
	return useContext(GeolocationContext);
};

const SearchContextProvider = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [geolocation, setGeolocation] = useState(false);

    return (
        <SearchContext.Provider value={[searchInput, setSearchInput]}>
            <GeolocationContext.Provider value={[geolocation, setGeolocation]}>
			    {props.children}
            </GeolocationContext.Provider>
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;
