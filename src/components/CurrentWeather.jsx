import React from 'react'
import styled from 'styled-components'

const CurrentWeather = ({data}) => {
  return (
      <StyledCurrentWeather>
        
        <div className="location box">
            <h2  className='mid-name'>{data.location.region},<h2 className='mid-name'>{data.location.country}</h2></h2>
            <hr />
            <h3 className='mid-name'>Date: {data.location.localtime}</h3>
            
        </div>

        <div className="current-weather box">
            <img src={data.current.condition.icon} alt="icon" />
            <h1 className='bigger'>{data.current.temp_c}°C</h1>

            <div className="content">
                <h4>Feels Like: {data.current.feelslike_c}°C</h4>
                <h4>Wind Speed: {data.current.wind_kph}kph</h4>
                <h4> Max Temp: {data.forecast.forecastday[0].day.maxtemp_c}°C</h4>
                <h4> Min Temp: {data.forecast.forecastday[0].day.mintemp_c}°C</h4>
            </div>
        </div>
    </StyledCurrentWeather>
  )
}

const StyledCurrentWeather = styled.div `
    display: flex;
    justify-content: space-around;
    background-color: rgba(0,0,0,0.5);


    .current-weather {
        display: flex;
        justify-content: space-between
        align-item: center;
        width: 400px;
        padding: 20px;
        

    img {
        width: 80px;
        height: 80px;
    }
    h1 {
        font-size: 3rem
    }
    .content, .bigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column ;

        h5 {
            font-weight: normal
        }
    }
    }
    .location {
        width: 350px;
        padding: 20px;

        h2 {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        h3 {
            text-align: right;
            font-size: .8rem;
            margin-bottom: 10px;
        }

        h4 {
            text-align: right;
            font-size: .8rem;
            margin-bottom: 10px;
            font-weight: 800;
        }
    }

    .mid-name {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column ;
    }

    .box {
        background-color: rgba(0,0,0,0.1);
        width: 400px;
        color: white;
        border-radius: 10px;
    }
`

export default CurrentWeather