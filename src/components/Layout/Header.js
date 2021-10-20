import React from 'react';

import classes from './Header.module.scss';
import Form from '../Form/Form';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<Form />
		</header>
	);
};

export default Header;
