import React, { useContext } from 'react';

import classes from './Modal.module.scss';

import { GeolocationContext } from '../../store/geolocation-context';

const Modal = () => {
	const { geo, prompt } = useContext(GeolocationContext);

	const [geolocation, setGeolocation] = geo;
	const [promptGeolocation, setPromptGeolocation] = prompt;

	const yesButtonHandler = () => {
		setGeolocation(true);
		setPromptGeolocation(false);
	};

	const noButtonHandler = () => {
		setGeolocation(false);
		setPromptGeolocation(false);
	};

	if (promptGeolocation) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
	}

	const modalOrNot =
		promptGeolocation && localStorage.getItem('city') === null ? (
			<div className={classes.modal}>
				<div className={classes.text}>Would you like to use geolocation?</div>
				<div className={classes.buttons}>
					<button className={classes.button} onClick={yesButtonHandler}>
						Yes
					</button>
					<button className={classes.button} onClick={noButtonHandler}>
						No
					</button>
				</div>
			</div>
		) : (
			''
		);

	return <>{modalOrNot}</>;
};

export default Modal;
