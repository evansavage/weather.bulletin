import React, { useState } from 'react';
import WeatherCards from './weatherCards.js'
import ReactDOM from 'react-dom';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// import $ from 'jquery';

export default function SearchBar () {
  const [zip, setZip] = useState('');
  const [units, setUnits] = useState('imperial');
  const api_key = 'b8c57c1c1fe78770517a0b492af57a54';
  const api_url = 'https://api.openweathermap.org/data/2.5/forecast';

  const changeZip = e => {
    setZip(e.target.value);
  }

  function fetchData(units) {
    fetch(`${api_url}?zip=${zip},us&temp_min&units=${units}&APPID=${api_key}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          if (zip === '') {
            return Promise.reject('Please enter a zip code');
          } else {
            return Promise.reject('Unrecognized zip code');
          }
        }
      })
      .then(data => {
        return ReactDOM.render(<WeatherCards weatherData={data} zipCode={zip} />, document.getElementById('weather-day-container'));
      })
      .catch(error => {
        return ReactDOM.render(
          <div className="weather-header-wrapper">
            <h2 className="weather-header error" style={{"font-weight": "200"}}>{error}</h2>
          </div>,
          document.getElementById('weather-day-container')
        )
      });
  }



  const changeUnits = (e, newUnits) => {
    if (newUnits !== null) {
      setUnits(newUnits, fetchData(newUnits));
    }
  }

  const submitZip = e => {
    e.preventDefault();
    fetchData(units);
  }

  return (
    <>
    <form className="zip-form" onSubmit={submitZip}>
      <label>
        <input className="zip-input" placeholder="Zip Code" type="text" onChange={changeZip} value={zip} maxLength="5" />
      </label>
      <input className="zip-submit" type="submit" value="Check Weather" />
    </form>
    <ToggleButtonGroup className="unit-buttons" value={units} exclusive onChange={changeUnits} aria-label="temperature units">
      <ToggleButton value="imperial">F&#730;</ToggleButton>
      <ToggleButton value="metric">C&#730;</ToggleButton>
    </ToggleButtonGroup>
    </>
  )
}
