import React from 'react';

import Container from '../UI/Container';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Layout = (props) => {
	return (
		<React.Fragment>
			<Container>
				<Header />
				{props.children}
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
