import React, { useState, useContext } from 'react';

const SearchContext = React.createContext();

export const useSearch = () => {
    return useContext(SearchContext);
};

const SearchProvider = (props) => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <SearchContext.Provider value={[searchInput, setSearchInput]}>
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
