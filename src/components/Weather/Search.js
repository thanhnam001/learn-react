import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputLocation, setInputLocation] = useState("");
  const [responseWeatherInfo, setResponseWeatherInfo] = useState({});
  let navigate = useNavigate();
  const handleSearchBtn = async () => {
    await axios
      .get("http://api.weatherapi.com/v1/current.json", {
        headers: { key: process.env.REACT_APP_WEATHER_API_KEY },
        params: { q: inputLocation },
      })
      .then((response) => {
        setResponseWeatherInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleViewDetail = (location) => {
    navigate(`/weather/detail/${location}`);
  };
  return (
    <div className="search-weather-container">
      <input
        type="text"
        placeholder="Type location here"
        value={inputLocation}
        onChange={(event) => setInputLocation(event.target.value)}
      />
      <button
        onClick={() => {
          handleSearchBtn();
        }}
      >
        Search
      </button>
      {!_.isEmpty(responseWeatherInfo) && (
        <div className="result">
          <div className="location">
            <span
              onClick={() =>
                handleViewDetail(responseWeatherInfo.location.name)
              }
            >
              Current location: {responseWeatherInfo.location.name}
            </span>
          </div>
          <div className="temp_c">
            Temperature in C: {responseWeatherInfo.current.temp_c}
          </div>
          <div className="temp_f">
            Temperature in F: {responseWeatherInfo.current.temp_f}
          </div>
          <div className="condition">
            Condition: {responseWeatherInfo.current.condition.text}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
