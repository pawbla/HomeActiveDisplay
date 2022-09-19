import React, {useEffect, useState} from 'react';
import './styles.scss';
import TopComponent from './TopComponent';
import MiddleComponent from './MiddleComponent';
import BottomComponent from './BottomComponent';
import {DEFAULTS} from './Constants';
import Popup from '../../Libs/Popup/Popup';

import { useDispatch, useSelector } from 'react-redux';
import {getWeather} from '../../features/fetchWeather'

const periodTime = 10000;

export default function Weather(props) {

  const dispatch = useDispatch();

  const {payload}  = useSelector((state) => state.fetchWeather)

  useEffect(() => {
    dispatch(getWeather());
    const timer = setInterval(() => {
    dispatch(getWeather());
    }, periodTime);
    return () => clearInterval(timer);
  }, []);

  return (
      <WeatherContext values={prepareValues(payload)}/>
  )
}

function WeatherContext(props) {
  const [isOffPopup, setOffPopup] = useState(false);

  const showOffPopup = () => {
    setOffPopup(true);
  }

  return (
    <div className="weather">
        <TopComponent isError={isError(props.values)} closePopup={showOffPopup}/>
        <MiddleComponent values={props.values.middle}/>
        <BottomComponent values={props.values} />
        {isOffPopup ? <Popup text="Application is getting closed" /> : null}
    </div>
  )
}

const prepareValues = (data) => {
  return {
    day: {
      sunrise: data ? data.sun.rise.value : DEFAULTS.EMPTY,
      sunset: data ? data.sun.set.value : DEFAULTS.EMPTY,
      isError: data ? isErrorDay(data.sun) : true
    },
    airPollution: {
      pm25percent: data ? data.airPolution.pm25percent.value : DEFAULTS.EMPTY,
      pm10percent: data ? data.airPolution.pm10percent.value : DEFAULTS.EMPTY,
      caqiColor: data ? data.airPolution.caqiColor.value : DEFAULTS.EMPTY,
      caqi: data ? data.airPolution.caqi.value : DEFAULTS.EMPTY,
      forecast: data ? data.airPolution.forecast : prepareDefaultAirPollutionForecast(),
      isError: data ? isErrorAirPollution(data.airPolution) : true
    },
    moon: {
      text: data ? data.moon.text.value : DEFAULTS.EMPTY,
      icon: data ? data.moon.picture.value : 0,
      isError: data ? isErrorMoon(data) : true

    },
    middle: {
      pressure: {
        pressure: data ? data.weather.pressure.value : DEFAULTS.EMPTY,
        history: data ? data.history.pressure : DEFAULTS.EMPTY_ARR,
        isError: data ? isErrorPressure(data.weather.pressure, data.history.pressure) : true
      },
      weather: {
        text:  data ? data.weather.weatherText.value : DEFAULTS.EMPTY,
        icon: data ? prepareIconNo(data.weather.weatherIcon.value) : DEFAULTS.EMPTY,
        isError: data ? isErrorWeather(data.weather) : true
      },
      wind: {
        speed: data ? data.weather.windSpeed.value : DEFAULTS.EMPTY,
        dirDeg: data ? data.weather.windDirectionDeg.value : DEFAULTS.EMPTY,
        dirVal: data ? data.weather.windDirection.value : DEFAULTS.EMPTY,
        isError: data ? isErrorWind(data.weather) : true
      },
      in: {
        temp: data ? data.in.temperature.value : DEFAULTS.EMPTY,
        hum: data ? data.in.humidity.value : DEFAULTS.EMPTY,
        isError: data ? isErrorTempHum(data.in) : true
      },
      out: {
        temp: data ? data.out.temperature.value : DEFAULTS.EMPTY,
        hum: data ? data.out.humidity.value : DEFAULTS.EMPTY,
        isError: data ? isErrorTempHum(data.out) : true
      }
    }
  }
}

const isErrorDay = (sun) => {
  return (sun.set.isError || sun.set.isError);
}

const isErrorAirPollution = (airPolution) => {
  return (airPolution.pm25percent.isError | airPolution.pm10percent.isError 
    | airPolution.caqiColor.isError | airPolution.caqi.isError |airPolution.forecast.isError);
}

const isErrorPressure = (pressure, history) => {
  return (pressure.isError || history.isError);
}

const isErrorWeather = (weather) => {
  return (weather.weatherText.isError || weather.weatherIcon.isError);
}

const isErrorWind = (weather) => {
  return (weather.windSpeed.isError || weather.windDirectionDeg.isError || weather.windDirection.isError);
}

const isErrorTempHum = (data) => {
  return (data.temperature.isError || data.humidity.isError);
}

const isErrorMoon = (data) => {
  return (data.moon.isError || data.moon.isError);
} 

const isError = (data) => {
  return (data.day.isError 
    || data.airPollution.isError 
    || data.middle.pressure.isError
    || data.middle.weather.isError
    || data.middle.wind.isError
    || data.middle.in.isError
    || data.middle.out.isError);
}

const prepareDefaultAirPollutionForecast = () => {
  return {
    date: DEFAULTS.EMPTY,
    isError: true,
    values: prepareDefaultAirPollutionForecastValues()
  }
}

const prepareDefaultAirPollutionForecastValues = () => {
  var arr = [];
  for (var i = 0; i < 12; i++) {
    arr.push({
        date: DEFAULTS.EMPTY,
        caqi: DEFAULTS.EMPTY,
        caqiColor: DEFAULTS.EMPTY
    });
}
  return arr;
}

const prepareIconNo = (iconNo) => {
  return  iconNo <= 9 ? "0"+iconNo : iconNo;
}