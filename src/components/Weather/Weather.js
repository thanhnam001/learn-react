import axios from "axios";
import React from "react";
import Search from "./Search";
import "./Weather.scss";
import WeatherByLocation from "./WeatherByLocation";

class Weather extends React.Component {
  state = {
    title: "",
  };
  async componentDidMount() {
    let response = await axios.get(
      "http://api.weatherapi.com/v1/current.json",
      {
        headers: { key: process.env.REACT_APP_WEATHER_API_KEY },
        params: { q: "Paris" },
      }
    );
    this.setState({ title: response.data.location.name });
  }
  render() {
    return (
      <div className="weather-app-container">
        <Search />
        <hr/>
        <WeatherByLocation location={'2717932'}/>
      </div>
    );
  }
}

export default Weather;
