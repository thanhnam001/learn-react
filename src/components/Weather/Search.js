import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputLocation, setInputLocation] = useState("");
  const [responseLocationInfo, setResponseLocationInfo] = useState([]);
  const [searched, setSearched] = useState(false);
  let navigate = useNavigate();
  const handleSearchBtn = async () => {
    await axios
      .get("http://api.weatherapi.com/v1/search.json", {
        headers: { key: process.env.REACT_APP_WEATHER_API_KEY },
        params: { q: inputLocation },
      })
      .then((response) => {
        setResponseLocationInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setSearched(true);
  };
  const handleViewDetail = (location) => {
    navigate(`/weather/detail/${location}`);
  };
  return (
    <div className="search-weather-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Type location here"
          value={inputLocation}
          onChange={(event) => setInputLocation(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSearchBtn();
          }}
        />
        <button
          onClick={() => {
            handleSearchBtn();
          }}
        >
          Search
        </button>
      </div>

      {!_.isEmpty(responseLocationInfo) ? (
        <div className="result-container">
          {responseLocationInfo.map((item, index) => {
            return (
              <div className="result-child" key={`result-${index}`}>
                <div className="id">
                  <b>
                    <span onClick={() => handleViewDetail(item.id)}>
                      Place id: {item.id}
                    </span>
                  </b>
                </div>
                <div className="location">Current location: {item.name}</div>
                <div className="region">Region: {item.region}</div>
                <div className="country">Country: {item.country}</div>
              </div>
            );
          })}
        </div>
      ) : (
        searched && <div>No information</div>
      )}
    </div>
  );
};

export default Search;
