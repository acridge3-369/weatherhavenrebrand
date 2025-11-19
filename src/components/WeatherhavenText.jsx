import React from 'react';

const WeatherhavenText = () => {
    const style = {
        fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
        fontWeight: 400,
        color: 'rgb(255, 255, 255)',
        fontSize: '18px',
        lineHeight: '28px',
        display: 'inline-block' // Ensures it sits well in text
    };

    return <span style={style}>Weatherhaven</span>;
};

export default WeatherhavenText;
