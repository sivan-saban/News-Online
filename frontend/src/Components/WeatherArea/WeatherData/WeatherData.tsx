import WeatherModel from "../../../Model/weatherModel";
import "./WeatherData.css";
import React from "react";

interface WeatherDataProps {
    data: WeatherModel;
    formattedDate: string;
  }

//function WeatherData(): JSX.Element  {
    const WeatherData: React.FC<WeatherDataProps> = ({ data, formattedDate }) => {
  const currentDate = new Date().toLocaleDateString("en-GB"); // "26/02/2024"

    return (
        <div className="WeatherData">
	
       <>   
  <h2>         
    {data.city?.name || ""}, {data.city?.country || ""}{" "}
    {currentDate} {data.list[0].main.temp_max}°-
    {data.list[0].main.temp_min}{" "}°
  </h2>
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Hour</th>
        <th scope="col">Temperature (°C)</th>
                    <th scope="col">Feels Like (°C)</th>
                    <th scope="col">Weather Description</th>
                    <th scope="col">Weather Icon</th>
                  </tr>
                </thead>
                <tbody>
                  {data.list
                    .filter(
                      (item) => item.dt_txt.split(" ")[0] === formattedDate
                    )
                    .map((item) => (
                      <tr key={item.dt_txt}>
                        <td>{item.dt_txt.split(" ")[1]}</td>
                        <td>{item.main?.temp}°</td>
                        <td>{item.main?.feels_like}°</td>
                        <td>{item.weather[0]?.description}</td>
                        <td>
                          <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0]?.description}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </>
              {/* Second Table */}
            <>
              <h2>Daily Weather Overview</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Temperature (°C)</th>
                    <th scope="col">Feels Like (°C)</th>
                    <th scope="col">Weather Description</th>
                    <th scope="col">Weather Icon</th>
                  </tr>
                </thead>
                <tbody>
                  {data.list.map(
                    (item, index) =>
                      index % 8 === 4 && (
                        <tr key={item.dt_txt}>
                          <td>{item.dt_txt.split(" ")[0]}</td>
                          <td>{item.main?.temp}°</td>
                          <td>{item.main?.feels_like}°</td>
                          <td>{item.weather[0]?.description}</td>
                          <td>
                            <img
                              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                              alt={item.weather[0]?.description}
                            />
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </>


        </div>
    );
}

export default WeatherData;
