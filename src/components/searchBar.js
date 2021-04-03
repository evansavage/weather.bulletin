import React, { useState, useEffect } from 'react';
import WeatherCards from './weatherCards.js'
import ReactDOM from 'react-dom';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
import $ from 'jquery';

// Functional component for querying the API, maintaining state of user inputs

export default function SearchBar () {

  const api_key = 'b8c57c1c1fe78770517a0b492af57a54';                 // woopsies!
  const api_url = 'https://api.openweathermap.org/data/2.5/forecast';

  // allows for pushing params to browser history
  const history = useHistory();

  // params variable to update/push to history
  const params = new URLSearchParams(history.location.search);

  // State management hooks for the user input zip codes and temperature units
  const [zip, setZip] = useState(params.get('zip') || '');
  const [units, setUnits] = useState((params.get('units') !== null && params.get('units') !== '') ? params.get('units') : 'imperial');


  // On page load, fetch data if there is a zip code
  useEffect(() => {
    if (zip) {
      fetchData(units);
    }
  },[])

  // Display/hide clear button if there is any text entered
  useEffect(() => {
    (zip)
    ? $('.zip-clear').css({'display': 'flex'})
    : $('.zip-clear').css({'display': 'none'})
  },[zip])

  // Update zip code on entry
  const changeZip = e => {
    setZip(e.target.value);
  }

  // Clear zip and update params in URL
  const clearZip = e => {
    e.preventDefault();
    setZip('');
    params.set("zip", '');
    history.push({search: params.toString()});
    $('.zip-input').focus();
  }

  // Fetch the API data, returning errors if the zip is either empty
  // or does not return a 2xx code
  // - Render the data with the functional component WeatherCards if 2xx response
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
        return ReactDOM.render(
          <WeatherCards weatherData={data} zipCode={zip} />,
          document.getElementById('weather-day-container')
          );
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

  // Refresh the API search if the temperature units change, prevent the default degrees case
  const changeUnits = (e, newUnits) => {
    if (newUnits !== null) {
      params.set('units', newUnits);
      setUnits(newUnits, fetchData(newUnits));
      history.push({search: params.toString()});
    }
  }

  // On enter/'Check Weather', searcb for the current entered zip code
  const submitZip = e => {
    e.preventDefault();
    params.set("zip", zip);
    history.push({search: params.toString()});
    fetchData(units);
  }

  return (
    <>
    <form className="zip-form" onSubmit={submitZip}>
      <div className="zip-input-wrapper">
        <label className="zip-label">
          <input className="zip-input" placeholder="Zip Code" type="text" onChange={changeZip} value={zip} maxLength="5" />
        </label>
        <div className="zip-clear" onClick={clearZip}><CloseIcon /></div>
      </div>
      <Button id="zip-submit" type="submit">Check Weather</Button>
    </form>
    <ToggleButtonGroup className="unit-buttons" value={units} exclusive onChange={changeUnits} aria-label="temperature units">
      <ToggleButton value="imperial">F&#730;</ToggleButton>
      <ToggleButton value="metric">C&#730;</ToggleButton>
    </ToggleButtonGroup>
    </>
  )
}
