import React, { useEffect } from 'react';
import classes from './Buttons.module.scss';

import { useUnit } from '../../store/UnitContext';

export const UnitButton = (props) => {
    const [unit, setUnit] = useUnit();

    const unitSign = unit ? '°C' : '°F';

    const unitHandler = () => {
        setUnit(!unit)
    };

    return (
        <button className={classes['unit-button']} onClick={unitHandler}>{unitSign}</button>
	);
};

