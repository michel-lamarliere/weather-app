import React, { useContext } from 'react';
import classes from './Buttons.module.scss';

import geo_icon from '../../assets/img/geolocation.png';

import left_button from '../../assets/img/left.png';
import right_button from '../../assets/img/right.png';

import { GeolocationContext } from '../../store/geolocation-context';
import { UnitContext } from '../../store/unit-context';

export const UnitButton = (props) => {
	const [unit, setUnit] = useContext(UnitContext);

	const unitSign = unit ? '°C' : '°F';

	const unitHandler = () => {
		setUnit(!unit);
	};

	return (
		<button className={classes.unit_button} onClick={unitHandler}>
			{unitSign}
		</button>
	);
};

export const GeoButton = () => {
	const { geo } = useContext(GeolocationContext);
	const [geolocation, setGeolocation] = geo;

	const geolocationHandler = () => {
		setGeolocation(true);
	};
	return (
		<button className={classes.geo} onClick={geolocationHandler}>
			<img src={geo_icon} alt='geolocation' />
		</button>
	);
};

export const LeftButton = (props) => {
	return (
		<button className={classes.left} onClick={props.onClick}>
			<img src={left_button} alt='left button' className={classes.left_img} />
		</button>
	);
};

export const RightButton = (props) => {
	return (
		<button className={classes.right} onClick={props.onClick}>
			<img src={right_button} alt='right button' className={classes.right_img} />
		</button>
	);
};
