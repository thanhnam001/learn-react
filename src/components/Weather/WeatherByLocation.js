import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
import WeatherDay from "./Child/WeatherDay";
import WeatherForecast from "./Child/WeatherForecast";
import "./Weather.scss";

const WeatherByLocation = (props) => {
  let { location } = useParams(); // || props.location;
  const [forecastWeatherInfo, setForecastWeatherInfo] = useState([]);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const getForecastWeatherByLocation = async () => {
      if (!location) location = props.location;
      await axios
        .get("http://api.weatherapi.com/v1/forecast.json", {
          headers: { key: process.env.REACT_APP_WEATHER_API_KEY },
          params: { q: `id:${location}`, days: 5 },
        })
        .then((response) => {
          setForecastWeatherInfo(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getForecastWeatherByLocation();
  }, [location]);
  return (
    <>
      {location && <button onClick={() => handleGoBack()}>Go back</button>}
      <div className="weather-by-location-container">
        {!_.isEmpty(forecastWeatherInfo) && (
          <div className="weather-list">
            <div className="location-name">{`${forecastWeatherInfo.location.name} - ${forecastWeatherInfo.location.country}`}</div>
            <WeatherDay weatherInfo={forecastWeatherInfo} />
            <WeatherForecast
              forecastInfo={forecastWeatherInfo.forecast.forecastday}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherByLocation;
