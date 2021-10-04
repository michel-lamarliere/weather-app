import React, { useEffect, useState } from 'react';

import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';
import Loading from '../UI/Loading';

const DataScreens = (props) => {
	const [loading, setLoading] = useState(true);

	const color = '#000000';

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<React.Fragment>
			{!loading ? (
				<React.Fragment>
					<Current />
					<Hourly />
					<Daily />
				</React.Fragment>
			) : (
				<Loading />
			)}
		</React.Fragment>
	);
};

export default DataScreens;
