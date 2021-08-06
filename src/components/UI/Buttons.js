import React, { useEffect } from 'react';
import classes from './Buttons.module.scss';

import geo from '../../assets/img/geolocation.png';

import left_button from '../../assets/img/left.png';
import right_button from '../../assets/img/right.png';

import { useSearch, useGeolocation } from '../../store/SearchContext';
import { useUnit } from '../../store/UnitContext';

export const UnitButton = (props) => {
    const [unit, setUnit] = useUnit();

    const unitSign = unit ? '°C' : '°F';

    const unitHandler = () => {
        setUnit(!unit)
    };

    return (
        <button className={classes.unit_button} onClick={unitHandler}>{unitSign}</button>
	);
};

export const GeoButton = () => {
    const [geolocation, setGeolocation] = useGeolocation();

    const geolocationHandler = () => {
        setGeolocation(!geolocation)
    };
    return (
        <button className={classes.geo} onClick={geolocationHandler}>
            <img src={geo} alt='geolocation' />
        </button>
    )
};
        
export const LeftButton = (props) => {

    return (
		<button className={classes.left} onClick={props.onClick}>
            <img src={left_button} alt='left button' className={classes.left_img}/>
		</button>
	);
}

export const RightButton = (props) => {

    return (
		<button className={classes.right} onClick={props.onClick}>
			<img src={right_button} alt='right button' className={classes.right_img} />
		</button>
	);
}
