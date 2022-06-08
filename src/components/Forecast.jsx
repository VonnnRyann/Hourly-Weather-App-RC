import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Forecast = ({data}) => {
    const currentWeather = data.forecast.forecastday[0].hour
  return (
    <StyledForecast>
       <h1 className='fonts'>Current Weather</h1>
         <div className="current-forecast box-shadow">
        {currentWeather.map((weather)=> (
            <div key={weather.time_epoch} className="card box-shadow">
                <span>{moment(weather.time).format('h:mm:ss a')}</span>
                <img src={weather.condition.icon} alt="weather icon" />
                <p>{weather.temp_c}°C</p>
            </div>
        ))}
        </div>

        <h1 className='fonts'>3 Days Weather Forecast</h1>
        {data.forecast.forecastday.map((futureWeather) => (
        <div key={futureWeather.date_epoch} className='future-forecast'>
        <div className="current-forecast box-shadow">
        {futureWeather.hour.map((weather)=> (
            <div key={futureWeather.hour_epoch} className="card box-shadow">
                <span>{moment(weather.time).format('h:mm:ss a')}</span>
                <img src={weather.condition.icon} alt="weather icon" />
                <p>{weather.temp_c}°C</p>
            </div>
        ))}
        </div>
        </div>
        ))}

    
    </StyledForecast>
  )
}

const StyledForecast = styled.div `
margin-top 40px;

h1 {
    margin 20px 0;
    text-align: center;
}

.current-forecast {
    display: flex;
    overflow-y: hidden;
    padding: 20px;

    .card {
        padding: 10px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0,0,0,0.5);
        color: white;

        span {
            font-size: .9rem;
            text-align: center;
        }
    

    /* width */
::-webkit-scrollbar {
  height: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0001;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
}


}
.future-forecast {
    margin: 20px 0;
}
`

export default Forecast