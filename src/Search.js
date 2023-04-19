import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let searchForm = (
    <div className="search-comp">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control placeholder="Enter city" onChange={updateCity} />
          <Button type="submit" variant="primary">
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );

  if (!weather) return searchForm;
  else
    return (
      <div>
        {searchForm}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
}
