import React, { useState, useRef, useEffect, useCallback } from 'react';
import classes from './Header.module.scss';
import Form from '../Form/Form';

const Header = (props) => {

    return (
        <header>
            <Form />
            <button className={classes['unit-button']}>°C</button>
        </header>
    );
};

export default Header;
