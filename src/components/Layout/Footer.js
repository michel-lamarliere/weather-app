import React from 'react';

import classes from './Footer.module.scss';

import ml_img from '../../assets/icons/logo_white.svg';
import el_icon from '../../assets/icons/logo_el.svg';
import github_icon from '../../assets/icons/github.svg';
import linkedin_icon from '../../assets/icons/linkedin.svg';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.michel}>
				<div className={classes.michel_links}>
					<a
						href='https://github.com/michel-lamarliere/weather-app-react'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={github_icon} alt='github' />
					</a>
					<a
						href='https://michel-lamarliere.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={ml_img} alt='michel' />
					</a>
					<a
						href='https://www.linkedin.com/in/michel-lamarli%C3%A8re-a8394a1b1/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={linkedin_icon} alt='linkedin' />
					</a>
				</div>
				<div className={classes.names}>Michel Lamarlière</div>
			</div>
			<div className={classes.enola}>
				<div className={classes.names}>Designed by Enola Louge</div>
				<a href='https://enolalouge.com' target='_blank' rel='noreferrer'>
					<img src={el_icon} alt='enola' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
