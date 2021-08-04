import React from 'react';
import classes from './Header.module.scss';
import Form from '../Form/Form';
import { UnitButton } from '../UI/Buttons';

const Header = (props) => {
    return (
        <header>
            <Form />
            <UnitButton />
        </header>
    );
};

export default Header;
