import React, { useState } from 'react';
import classes from './Current.module.scss';

import arrow_up from '../../assets/img/arrow_up.svg';
import arrow_down from '../../assets/img/arrow_down.svg';

import { useCityData } from '../../store/CityContext';

const Current = (props) => {
    const [cityData, setCityData] = useCityData();

    return (
        <div className={classes.current}>
            <div className={classes.city}>{cityData.city}</div>
            <img src="" alt="icon" className={classes.icon} />
            <div className={classes.temp}>0°</div>
            <div className={classes.date}>Date</div>
            <div className={classes.minmax}>
                <div className={classes['minmax-div']}>
                    <img src={arrow_up} alt="max temperature" />
                    <div className={classes['minmax-div-text']}>00°</div>
                </div>
                <div className={classes['minmax-div']}>
                    <img src={arrow_down} alt="min temperature" />
                    <div className={classes['minmax-div-text']}>00°</div>
                </div>
            </div>
            <div className={classes.error}>{cityData.errorText}</div>
        </div>
    )
};

export default Current;
