import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer  // state is called weather 
});

export default rootReducer;
