import axios from 'axios'


const API_KEY = 'e33c3048cfd891ee5941f074a01eccd7'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}