import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css'

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("Mumbai");
  const [error, setError] = useState(false);
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "d6deacdba28a7a1cd4a1590087c397ba"

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
  const handleChange = async (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true)
    }
  };

  return (
    <>
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField className="input-field" id="city" label="City Name" variant="outlined" required onChange={handleChange} />
        <br />
        <br />
        <Button className="search-button" variant="outlined" type="submit">Search</Button>
        {error && <p>No such place found!</p>}
      </form>
    </>
  )
}
