import axios from 'axios'; // package for making AJAX call to API

const API_KEY = '570383a4c7fa342ce5aa0d20b0674974';

const fiveDayAPIRequest = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER'; 
// store action type as static string
// convention for code: make variable with the type in action
// then import this variable in the correct reducer

export function fetchWeather(city){
    const url = `${fiveDayAPIRequest}&q=${city},us`; // hardcoded this to search only US cities for now
    const request = axios.get(url); // make get request to url above and save response to request
    console.log('fetchWeather->request object:'+request);
    
    return {
        type:FETCH_WEATHER,
        payload:request  // we pass api response as payload

        /*
        redux-Promise -- middleware has power to stop action remember
        redux-Promise check payload, if payload is promise object-> in this case it is promise returned from axios AJAX call to weatherAPI
        then redux-Promise stops it completely waits for promise to resolve, but then redux-Promise works to unwrap return the data to reducer as new payload
        
        */
    };
}