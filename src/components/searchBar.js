import React, { useState, useEffect } from 'react';
import WeatherCards from './weatherCards.js'
import ReactDOM from 'react-dom';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useParams } from "react-router-dom";
import $ from 'jquery';

function useQuery() {
  return new URLSearchParams(window.location.search);
}

export default function SearchBar () {

  const api_key = 'b8c57c1c1fe78770517a0b492af57a54';
  const api_url = 'https://api.openweathermap.org/data/2.5/forecast';
  // const [query, setQuery] = useState('');
  const history = useHistory();

  const params = new URLSearchParams(history.location.search);
  const [zip, setZip] = useState(params.get('zip'));
  const [units, setUnits] = useState(params.get('units') || 'imperial');


  // On page load, fetch data if there is a zip code
  useEffect(() => {
    if (zip) {
      fetchData(units);
    }
  },[])

  // Display/hide clear button if there is a zip code
  useEffect(() => {
    if (zip) {
      $('.zip-clear').css({'display': 'block'});
    } else {
      $('.zip-clear').css({'display': 'none'});
    }
  },[zip])

  const changeZip = e => {
    setZip(e.target.value);
    params.set("zip", e.target.value);
    history.push({search: params.toString()});
  }

  const clearZip = e => {
    setZip('');
    params.set("zip", '');
    history.push({search: params.toString()});
  }

  function fetchData(units) {
    console.log(zip);
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
    params.set('units', newUnits);
    history.push({search: params.toString()});
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
      <label className="zip-label">
        <input className="zip-input" placeholder="Zip Code" type="text" onChange={changeZip} value={zip} maxLength="5" />
        <a onClick={clearZip} className="zip-clear"><CloseIcon /></a>
      </label>
      <Button id="zip-submit" type="submit">Check Weather</Button>
    </form>
    <ToggleButtonGroup className="unit-buttons" value={units} exclusive onChange={changeUnits} aria-label="temperature units">
      <ToggleButton value="imperial">F&#730;</ToggleButton>
      <ToggleButton value="metric">C&#730;</ToggleButton>
    </ToggleButtonGroup>
    </>
  )
}
