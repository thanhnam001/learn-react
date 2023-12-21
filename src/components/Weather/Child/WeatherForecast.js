import WeatherState from "./WeatherState";
import moment from "moment";
import _ from "lodash";

const WeatherForecast = (props) => {
  const forecastInfo = props.forecastInfo;
  return (
    <div className="weather-forecast-container">
      {!_.isEmpty(forecastInfo) &&
        forecastInfo.map((item, index) => {
          return (
            <div key={`weatherday-${index}`} className={`weather-day-${index}`}>
              <div className="date">
                {moment(item.date).format("ddd MM YYYY")}
              </div>
              <WeatherState weatherState={item.day.condition} />
              <div>Max temp C: {item.day.maxtemp_c}</div>
              <div>Min temp C: {item.day.mintemp_c}</div>
            </div>
          );
        })}
    </div>
  );
};

export default WeatherForecast;
