import React from 'react';

import { useWeatherData } from '../../store/WeatherContext';

const Daily = (props) => {
    const [weatherData] = useWeatherData();

    return (
        <div className="daily">
            <div className="daily-lign">
                <div className="daily-lign-date">
                    <div className="daily-lign-date-day"></div>
                    <div className="daily-lign-date-date"></div>
                </div>
                <div className="daily-lign-minmax">
                    <div className="daily-lign-minmax-div">
                        <img className="daily-lign-minmax-div-img" src="./img/arrow_up.svg" alt=''/>
                        <div className="daily-lign-minmax-div-text  daily-lign-minmax-max-text"></div>
                    </div>
                    <div className="daily-lign-minmax-div">
                        <img className="daily-lign-minmax-div-img" src="./img/arrow_down.svg" alt=''/>
                        <div className="daily-lign-minmax-div-text  daily-lign-minmax-min-text"></div>
                    </div>
                </div>
                <div className="daily-lign-weather">
                    <img className="daily-lign-weather-img" src="" alt=''/>
                </div>
                <div className="daily-lign-temp"></div>
            </div>
        </div>
    )
};

export default Daily;
