import zipcode_to_timezone from 'zipcode-to-timezone';
import moment from 'moment-timezone';
import getStateName from './getState.js';
import React, { useEffect, useState, useRef } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WeatherCards ({weatherData, zipCode}) {

  var image_url = 'https://openweathermap.org/img/wn/'
  console.log(weatherData['list']);
  var city_name = weatherData['city']['name'];
  var state_code = getStateName(zipCode)['code'];
  var tz = zipcode_to_timezone.lookup(zipCode);
  const [current_time, setTime] = useState(moment.tz(moment(), tz).format('h:mm A'));
  const [slides, setSlides] = useState();
  // const [nav, setNav] = useState();
  const sliderRef = useRef();

  useEffect (() => {

    setTime(moment.tz(moment(), tz).format('h:mm A'));
    sliderRef.current.slickGoTo(0);
    const timer = setInterval(() => {
      setTime(moment.tz(moment(), tz).format('h:mm A'));
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, [tz])

  let dailyData = {};
  let last_day = '';
  let first_iter = true;
  const slide = (y) => {
      (y > 0)
        ? sliderRef.current.slickNext()
        : sliderRef.current.slickPrev();
  }

  var swipe = true;
  var swipeThresh = 0.5;
  var swipeDiv = 50;

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if ((e.deltaX / swipeDiv >= swipeThresh || e.deltaX / swipeDiv <= -swipeThresh) && swipe) {
      swipe = false;
      slide(e.deltaX);
    } else {
      swipe = true;
    }
  })

  for (const x in weatherData['list']) {
    var inc = weatherData['list'][x];

    var local_datetime = moment.tz(inc['dt_txt'] + '+0000', tz);
    var day = local_datetime.format('YYYY-MM-DD');
    var day_string = local_datetime.format('ddd, MMM Do');
    var time = local_datetime.format('h:mm A');

    var inc_temp_min = Math.round(inc['main']['temp_min']);
    var inc_temp_max = Math.round(inc['main']['temp_max']);

    if (first_iter) {
      var current_temp = Math.round(inc['main']['temp']);
      var current_icon = inc['weather'][0]['icon'];
      var current_alt = inc['weather'][0]['main'];
      var current_precip = inc['pop'];
      first_iter = false;
    }

    if (day !== last_day) {
      dailyData[day] = {}
      dailyData[day]['times'] = []
      dailyData[day]['string'] = day_string;
      dailyData[day]['min'] = 10000000;
      dailyData[day]['max'] = 0;
      dailyData[day]['total_inc'] = 0
    }
    if (inc_temp_min < dailyData[day]['min']) {
      dailyData[day]['min'] = inc_temp_min;
    }
    if (inc_temp_max > dailyData[day]['max']) {
      dailyData[day]['max'] = inc_temp_max;
    }

    dailyData[day]['times'].push({
      "time": time,
      "weather": inc['weather'][0],
      "temp": Math.round(inc['main']['temp']),
      "pop": inc['pop']
    })

    console.log(dailyData[day]);
    last_day = day;
    dailyData[day]['total_inc'] += 1
  }
  console.log(dailyData);

  var settings = {
    dots: false,
    variableWidth: true,
    infinite: false,
    slidesToShow: 4,
    focusOnSelect: false,
    arrows: true,
    draggable: true,
    rows: 1,
    swipe: true,
    beforeChange: () => {
      setSlides(sliderRef.current.innerSlider.state.currentSlide);
      console.log(slides);
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          variableWidth: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          variableWidth: true
        }
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  }

  return (
    <>
      <div className="weather-header-wrapper">
        <h2 className="weather-header">{city_name}, {state_code}</h2>
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
              </div>
              {dailyData[key].times.map((obj, index) => {
                return (
                  <>
                  <div className="time-percent-wrapper">
                  <div key={key + '-' + index} className="time-wrapper">
                    <span className="hour-time">{obj['time']}</span>
                    <span className="hour-temp">{obj['temp']}&#730;</span>
                    <img alt={obj['weather']['main']} src={image_url + obj['weather']['icon'] + '@2x.png'} />
                  </div>
                  {
                    (obj['pop'] > 0)
                      ? <span className="precip-percent">{Math.round(obj['pop'] * 100)}%</span>
                      : ''
                  }
                  </div>
                  </>
                )
              })}
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
