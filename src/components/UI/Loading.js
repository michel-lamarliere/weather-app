import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

import classes from './Loading.module.scss';

const Loading = (props) => {
    const color = '#FFFFFF';
    
    return (
        <div className={classes.loading}>
            <ClipLoader color={color} loading={props.loading} size={150} />
        </div>
	);
};

export default Loading;
