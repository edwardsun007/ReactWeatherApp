import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weather_list';
import Header from './header';


export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="overlay">
            <Header/>
            <SearchBar/>
            <WeatherList/>
          </div>

          <video autoPlay loop muted>
            <source src="http://inserthtml.com/demos/javascript/background-videos/flowers.mp4" type="video/mp4">
            </source>
          </video>
      </div>
    );
  }
}
