import {useState} from 'react';
import './App.css';
import Search from './components/Search';
import useFetch from './hooks/useFetch';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

const App = () => {
  const [searchResults, setSearchResults] = useState({})
  const API_KEY = process.env.REACT_APP_MY_KEY;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchResults}&days=10&aqi=no&alerts=no`;
    console.log(url);
  const {data} = useFetch(url)
  return (
    <>
    <main className='container'>
      
      <h1
      className='middle'
      >Weather App</h1>
      <br />
      <br />
      <br />
      <br />
      
      <Search setSearchResults={setSearchResults}/>
      {Object.keys(data).length !== 0 && (
      <>
      <CurrentWeather data={data}/>
      <Forecast data={data}/>
      </>
      )}
    </main>
      </>
  );
};

export default App;
