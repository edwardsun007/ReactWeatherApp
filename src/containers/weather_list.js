import React, {Component} from 'react';

import { connect } from 'react-redux';
// connect function , react-redux is the middle bridge / glue between react and redux

import { Chart } from "../components/chart";

class WeatherList extends Component{

    renderWeather(cityData){

        const temps = cityData.list.map(weather=>weather.main.temp);
        
        const pressure = cityData.list.map(weather=>weather.main.pressure);

        const humidity = cityData.list.map(weather=>weather.main.humidity);

        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color="orange"/>
                </td>
                <td>
                    <Chart data={pressure} color="green"/>
                </td>
                <td>
                    <Chart data={humidity} color="blue"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {    // weather state from reducer is a list of cities' temp, pressure, humid....
                        // use map to iterate, for each city in the list, call renderWeather
                          this.props.weather.map(this.renderWeather)

                     }
                </tbody>
            </table>
        )
    }
}


/* ES6 syntax is {weather} as argument,
which equal to const weather = state.weather
*/
function mapStateToProps(state) {
    return {
        weather: state.weather // where this come from ( weather )? Think, try to remember
        // ES6 syntax for key and value are exactly same--- { weather } same as { weather : weather }
        // if u cannot figure out, check what is in the rootReducer !
    };
    // bindActionCreator with dispath make sure action flow down thru middleware ( in this case: fetchWeather )
}

export default connect(mapStateToProps)(WeatherList);