import "./Child.scss";

const WeatherState = (props) => {
  return (
    <div className="weather-state-container">
      <div className="image-state">
        <img src={props.weatherState.icon} />
      </div>
      <div className="text-state">{props.weatherState.text}</div>
    </div>
  );
};

export default WeatherState;
