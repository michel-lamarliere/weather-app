import React, { useEffect, useState } from 'react';

import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';
import Loading from '../UI/Loading';

const DataScreens = (props) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{!loading ? (
				<>
					<Current />
					<Hourly />
					<Daily />
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default DataScreens;
