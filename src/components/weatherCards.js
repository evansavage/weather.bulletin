import zipcode_to_timezone from 'zipcode-to-timezone';
import moment from 'moment-timezone';
import getStateName from './getState.js';
import React, { useEffect, useState, useRef } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Functional component for placing the dynamic weather information on the page

export default function WeatherCards ({weatherData, zipCode}) {

  var image_url = 'https://openweathermap.org/img/wn/'  // URL for serving weather logos
  var city_name = weatherData['city']['name'];          // City name from API
  var state_code = getStateName(zipCode)['code'];       //Inferred state name from heuristic check
  var tz = zipcode_to_timezone.lookup(zipCode);         // Timezone used for getting local time from zip code

  // state for keeping the current 12-hr time updated on the app
  const [current_time, setTime] = useState(moment.tz(moment(), tz).format('h:mm A'));

  // Ref for the daily weather slider
  const sliderRef = useRef();

  // Invoked when the timezone variable is changed, indicating a change of the
  //   zip code. Updates the current time when data is changed and every minute after
  useEffect (() => {
    setTime(moment.tz(moment(), tz).format('h:mm A'));
    setTimeout(() => sliderRef.current.slickGoTo(0), 10); // bug if set immediately at init
    const timer = setInterval(() => {
      setTime(moment.tz(moment(), tz).format('h:mm A'));
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, [tz])

  let dailyData = {};     // Dynamic object for storing daily data
  let last_day = '';      // Comparison variable to see if day has updated
  let first_iter = true;  // Catch first iteration case of the for loop

  // Loop through every 3-hour increment from the API data
  for (const x in weatherData['list']) {
    var inc = weatherData['list'][x];

    // Convert the UTC date time to the local timezone
    var local_datetime = moment.tz(inc['dt_txt'] + '+0000', tz);
    var day = local_datetime.format('YYYY-MM-DD');
    var day_string = local_datetime.format('ddd, MMM Do');
    var time = local_datetime.format('h A');

    // Max and min temps for the current iteration
    var inc_temp_min = Math.round(inc['main']['temp_min']);
    var inc_temp_max = Math.round(inc['main']['temp_max']);

    // On first iter, put aside data to display for current weather
    if (first_iter) {
      var current_temp = Math.round(inc['main']['temp']);
      var current_icon = inc['weather'][0]['icon'];
      var current_alt = inc['weather'][0]['main'];
      var current_precip = inc['pop'];
      first_iter = false;
    }

    // Initialize day-based object on a new day
    if (day !== last_day) {
      dailyData[day] = {}
      dailyData[day]['class_counts'] = {};    // counts of how many unique weather codes/icons
      dailyData[day]['times'] = [];           // the incremental weather at every point of the day
      dailyData[day]['string'] = day_string;  // readable format of the date
      dailyData[day]['min'] = 10000000;       // min temp initialization
      dailyData[day]['max'] = 0;              // max temp initialization
    }

    // Update min temp
    if (inc_temp_min < dailyData[day]['min']) {
      dailyData[day]['min'] = inc_temp_min;
    }

    // Update max temp
    if (inc_temp_max > dailyData[day]['max']) {
      dailyData[day]['max'] = inc_temp_max;
    }

    // Add specific weather from increment
    dailyData[day]['times'].push({
      "time": time,
      "weather": inc['weather'][0],
      "temp": Math.round(inc['main']['temp']),
      "pop": inc['pop']
    })

    // If the current weather code/icon is not in the class_counts dict,
    //   initialize a key-value pair for it
    if (!dailyData[day]['class_counts'][inc['weather'][0]['icon'].slice(0,2) + 'd']) {
      dailyData[day]['class_counts'][inc['weather'][0]['icon'].slice(0,2) + 'd'] = 0;
    }

    // If the increment is part of the daytime hours, increment it's total
    //  - Helps with assuming the daily weather logo when rendering
    if (local_datetime.hour() > 6 && local_datetime.hour() < 20) {
      dailyData[day]['class_counts'][inc['weather'][0]['icon'].slice(0,2) + 'd'] += 1;
    }

    last_day = day;
  }

  // Added slider functionality to allow for left/right track pad swiping on desktop
  var swipe = true;       // a sort of swipe state toggle
  var swipeThresh = 0.5;  // Only register swipes above this threshold
  var swipeDiv = 50;      // Swipe value divisor based on trial and error

  // slide previous/next based on input value
  const slide = (y) => {
      (y > 0)
        ? sliderRef.current.slickNext()
        : sliderRef.current.slickPrev();
  }

  // Event listener for tracking the X speed of the track pad
  // - When the swipe values gradually reduce to zero, they do not trigger
  //   another swipe while below the threshold
  window.addEventListener('wheel', (e) => {
    if ((e.deltaX / swipeDiv >= swipeThresh || e.deltaX / swipeDiv <= -swipeThresh)
      && swipe) {
      swipe = false;
      slide(e.deltaX);
    } else {
      swipe = true;
    }
  });

  // Slick Slider settings for updating how many slides to show/scroll and other metadata

  var settings = {
    dots: true,
    variableWidth: true,
    infinite: false,
    slidesToShow: 4,
    focusOnSelect: false,
    arrows: true,
    draggable: true,
    rows: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 40000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1168,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  }

  // RETURN COMMENTS
  //
  // - First, the current variables are placed at the top of the body content
  //     - If there is a current chance of precip, it is shown.
  // - The slider is initialized and React-ref'd so the functional component can
  //   act upon it
  // - Loop through each day object, and make the day header with high and low
  //   temps and assumed daily icon
  //    - The icon is assigned based on the day's code/icon that has the highest count
  //    - Loop through each increment in the day, showing the temp, icon,
  //      and precipitation if there is a chance

  return (
    <>
      <div className="weather-header-wrapper">
        <h2 className="weather-header">{city_name}, {state_code}</h2>
        <div class="line-break"></div>
        <div className="current-time">{current_time}</div>
        <div className="current-weather">{current_temp}&#730;</div>
        <img className="current-icon" alt={current_alt} src={image_url + current_icon + '@2x.png'} />
        {
          (current_precip > 0)
            ? <span className="precip-percent">{Math.round(current_precip * 100)}%</span>
            : ''
        }
      </div>
      <div className="day-container">
      <Slider ref={sliderRef} {...settings} className="custom-weather-slider" >
      {
        Object.keys(dailyData).map((key, index) => {
          return (index < 1000) ?
            <div key={key} className="day-wrapper">
              <div className="date-wrapper">
                <span className="day-title">{dailyData[key]['string']}</span>
                <span className="max-temp">{dailyData[key]['max']}&#730;</span>
                <span className="min-temp">{dailyData[key]['min']}&#730;</span>
                <img className="daily-icon" alt="daily-weather-icon" src={image_url + Object.keys(dailyData[key]['class_counts']).reduce((a,b) => dailyData[key]['class_counts'][a] > dailyData[key]['class_counts'][b] ? a : b) + '@2x.png'} />
              </div>
              {
                dailyData[key].times.map((obj, index) => {
                return (
                  <div className="time-percent-wrapper">
                  <div key={key + '-' + index} className="time-wrapper">
                    <span className="hour-time">{obj['time']}</span>
                    <span className="hour-temp">{obj['temp']}&#730;</span>
                    <img alt={obj['weather']['main']} src={image_url + obj['weather']['icon'] + '@2x.png'} />
                    {
                      (obj['pop'] > 0)
                        ? <span className="precip-percent">{Math.round(obj['pop'] * 100)}%</span>
                        : ''
                    }
                  </div>

                  </div>
                )})
              }
            </div>
          :
            ''
        })
      }
      </Slider>
      </div>
    </>
  )
}
