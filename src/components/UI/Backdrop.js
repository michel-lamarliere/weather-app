import { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.scss';

import { GeolocationContext } from '../../store/geolocation-context';

const Backdrop = (props) => {
    const { prompt } = useContext(GeolocationContext);

    const [promptGeolocation, setPromptGeolocation] = prompt;

    if (localStorage.getItem('city') !== null) {
        setPromptGeolocation(false);
    }

    const backdropOrNot =
		promptGeolocation && localStorage.getItem('city') === null ? (
			<div className={classes.backdrop}>{props.children}</div>
		) : (
			''
		);
    
    return ReactDOM.createPortal(
        <>
            {backdropOrNot}
        </>
    , document.getElementById('backdrop'))
};

export default Backdrop;
