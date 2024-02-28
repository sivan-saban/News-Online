import { useState } from "react";
import "./WeatherArea.css";
import weatherService from "../../../Services/WeatherService";
import WeatherModel from "../../../Model/weatherModel";
import Spinner from "../../Spinner/Spinner";
import WeatherData from "../WeatherData/WeatherData";
import WeatherCart from "../WeatherCart/WeatherCart";

function WeatherArea(): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<WeatherModel>(new WeatherModel());
  const [isLoading, setIsLoading] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-GB"); // "26/02/2024"
  // Manually format the date to "2024-02-26"
  const formattedDate = currentDate.split("/").reverse().join("-");

  // Event handler for input changes
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  // Event handler for button click
  const handleButtonClick = async () => {
    //console.log("Input value:", inputValue);
    setIsLoading(true);
    try {
      await weatherService
        .getWeatherByCity(inputValue)
        .then((weather) => {
          setData({
            city: weather.city,
            list: weather.list
          });
        })
        .catch((err) => console.log(err.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="WeatherArea">

      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Enter city"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
        ></input>

        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            onClick={handleButtonClick}
          >
            Get weather
          </button>
          <br />
        </div>
      </div>

      {!isLoading ? (
        <>
          {data.list && data.list.length > 0 && (
            <>
            <WeatherData data={data} formattedDate={formattedDate} />
            <WeatherCart data={data} />
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}

    </div>
  );
}

export default WeatherArea;
