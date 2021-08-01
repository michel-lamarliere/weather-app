import React, { useRef, useEffect, useCallback } from 'react';
import classes from './Header.module.scss';

import { useSearch } from '../../store/SearchContext';
import { useCityData } from '../../store/CityContext';

const Header = (props) => {
    const inputRef = useRef();
    const [searchInput, setSearchInput] = useSearch();

    const inputChangeHandler = useCallback((event) => {
        setSearchInput(event.target.value);
    }, [searchInput]);

    const searchHandler = (event) => {
        event.preventDefault();
        props.onSearchSubmit();
        
        setTimeout(() => {
            props.onGettingData();
        }, 500);
        setSearchInput('');
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <header>
            <form className={classes.form} onSubmit={searchHandler}>
                <span className={classes.magnifier}></span>
                <input
                    type="search"
                    className={classes.searchbar}
                    placeholder="Search"
                    value={searchInput}
                    onChange={inputChangeHandler}
                    ref={inputRef}
                />
            </form>
            <button className={classes['unit-button']}>°C</button>
        </header>
    )
};

export default Header;
