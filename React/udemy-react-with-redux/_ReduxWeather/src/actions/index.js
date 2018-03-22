import axios from 'axios';
import * as ACTIONS from '../constants/actions_constants';

const API_KEY = '84d5f819ca1bf0cca138ece5caf58f1c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  
  return {
    type: 'FETCH_WEATHER',
    payload: axios.get(url)
  };
}