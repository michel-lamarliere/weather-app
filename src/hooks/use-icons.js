import React, { useEffect } from 'react';

export const useIcons = (json, index, div, time, sunrise, sunset) => {
    
	useEffect(() => {
        if (json[index].weather[0].id >= 300 && json[index].weather[0].id <= 321) {
            div = '../assets/img/09d.svg';
        } else if (json[index].weather[0].id >= 200 && json[index].weather[0].id <= 232) {
            div = '../assets/img/11d.svg';
        } else if (json[index].weather[0].id >= 500 && json[index].weather[0].id <= 504) {
            div = '../assets/img/10d.svg';
        } else if (json[index].weather[0].id === 511) {
            div = '../assets/img/13d.svg';
        } else if (json[index].weather[0].id >= 520 && json[index].weather[0].id <= 531) {
            div = '../assets/img/09d.svg';
        } else if (json[index].weather[0].id >= 600 && json[index].weather[0].id <= 622) {
            div = '../assets/img/13d.svg';
        } else if (json[index].weather[0].id >= 701 && json[index].weather[0].id <= 781) {
            div = '../assets/img/50d.svg';
        }

        if (time >= sunrise && time <= sunset) {
            if (json[index].weather[0].id === 800) {
                div = '../assets/img/01d.svg';
            } else if (json[index].weather[0].id === 801) {
                div = '../assets/img/02d.svg';
            } else if (json[index].weather[0].id === 802) {
                div = '../assets/img/03d.svg';
            } else if (json[index].weather[0].id === 803 || json[index].weather[0].id === 804) {
                div = '../assets/img/04d.svg';
            }
        } else if (time >= sunset || (time >= 0 && time <= sunrise)) {
            if (json[index].weather[0].id === 800) {
                div = '../assets/img/01n.svg';
            } else if (json[index].weather[0].id === 801) {
                div = '../assets/img/02n.svg';
            } else if (json[index].weather[0].id === 802) {
                div = '../assets/img/03d.svg';
            } else if (json[index].weather[0].id === 803 || json[index].weather[0].id === 804) {
                div = '../assets/img/04d.svg';
            }
        } else {
            if (json[index].weather[0].id === 800) {
                div = '../assets/img/01d.svg';
            } else if (json[index].weather[0].id === 801) {
                div = '../assets/img/02d.svg';
            } else if (json[index].weather[0].id === 802) {
                div = '../assets/img/03d.svg';
            } else if (json[index].weather[0].id === 803 || json[index].weather[0].id === 804) {
                div = '../assets/img/04d.svg';
            }
        }
    }, []);

	return div;
};
