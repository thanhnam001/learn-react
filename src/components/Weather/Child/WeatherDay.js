import WeatherState from "./WeatherState";
import moment from "moment";

const WeatherDay = (props) => {
  const weatherInfo = props.weatherInfo;
  return (
    <div className="weather-day-container">
      <div className="current-time">{moment(weatherInfo.date).format("hh:mm")}</div>
      <WeatherState weatherState={weatherInfo.current.condition} />
      <div>Temp C: {weatherInfo.current.temp_c}</div>
      <div>Temp F: {weatherInfo.current.temp_f}</div>
      <div>Wind direction: {weatherInfo.current.wind_dir}</div>
    </div>
  );
};

export default WeatherDay;
