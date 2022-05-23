import React, {useEffect, useState} from 'react';
import './styles.scss';
import { getApi } from '../../Libs/RestApi/getApi';
import TopComponent from './TopComponent';
import MiddleComponent from './MiddleComponent';
import BottomComponent from './BottomComponent';

const url = "weather/measurements";
const port = "8082"
const queryParams = "";
const periodTime = 10000;

const DEFAULT_EMPTY = "-";
const DEFAULT_EMPTY_ARR = [];

let isGlobalError = false;

export default function Weather(props) {

  const [response, setResponse] = useState(prepareValues(undefined));

  useEffect(() => {
      const timer = setInterval(() => {
      getResponse();
      }, periodTime);
      return () => clearInterval(timer);
    }, []);

    const getResponse = async() => {
      let response = await getApi(port, url, queryParams)
      .then(json => {return json})
      .catch(error => {console.log("ERROR" + error.message)});
      isGlobalError = false;
      setResponse(prepareValues(response));
      }

    return (
        <WeatherContext values={response}/>
    )
}

function WeatherContext(props) {
  console.log(isGlobalError);
  return (
    <div className="weather">
        <TopComponent isError={isError(props.values)}/>
        <MiddleComponent values={props.values.middle}/>
        <BottomComponent values={props.values} />
    </div>
  )
}

const prepareValues = (data) => {
  return {
    day: {
      sunrise: data ? data.sun.rise.value : DEFAULT_EMPTY,
      sunset: data ? data.sun.set.value : DEFAULT_EMPTY,
      isError: data ? isErrorDay(data.sun) : true
    },
    airPollution: {
      pm25percent: data ? data.airPolution.pm25percent.value : DEFAULT_EMPTY,
      pm10percent: data ? data.airPolution.pm10percent.value : DEFAULT_EMPTY,
      caqiColor: data ? data.airPolution.caqiColor.value : DEFAULT_EMPTY,
      caqi: data ? data.airPolution.caqi.value : DEFAULT_EMPTY,
      forecast: data ? data.airPolution.forecast : prepareDefaultAirPollutionForecast(),
      isError: data ? isErrorAirPollution(data.airPolution) : true
    },
    moon: {
      text: data ? data.moon.text.value : DEFAULT_EMPTY,
      icon: data ? data.moon.picture.value : DEFAULT_EMPTY,
      isError: data ? isErrorMoon(data) : true

    },
    middle: {
      pressure: {
        pressure: data ? data.weather.pressure.value : DEFAULT_EMPTY,
        history: data ? data.history.pressure : DEFAULT_EMPTY_ARR,
        isError: data ? isErrorPressure(data.weather.pressure, data.history.pressure) : true
      },
      weather: {
        text:  data ? data.weather.weatherText.value : DEFAULT_EMPTY,
        icon: data ? prepareIconNo(data.weather.weatherIcon.value) : DEFAULT_EMPTY,
        isError: data ? isErrorWeather(data.weather) : true
      },
      wind: {
        speed: data ? data.weather.windSpeed.value : DEFAULT_EMPTY,
        dirDeg: data ? data.weather.windDirectionDeg.value : DEFAULT_EMPTY,
        dirVal: data ? data.weather.windDirection.value : DEFAULT_EMPTY,
        isError: data ? isErrorWind(data.weather) : true
      },
      in: {
        temp: data ? data.in.temperature.value : DEFAULT_EMPTY,
        hum: data ? data.in.humidity.value : DEFAULT_EMPTY,
        isError: data ? isErrorTempHum(data.in) : true
      },
      out: {
        temp: data ? data.out.temperature.value : DEFAULT_EMPTY,
        hum: data ? data.out.humidity.value : DEFAULT_EMPTY,
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
    date: DEFAULT_EMPTY,
    isError: true,
    values: prepareDefaultAirPollutionForecastValues()
  }
}

const prepareDefaultAirPollutionForecastValues = () => {
  var arr = [];
  for (var i = 0; i < 12; i++) {
    arr.push({
        date: DEFAULT_EMPTY,
        caqi: DEFAULT_EMPTY,
        caqiColor: DEFAULT_EMPTY
    });
}
  return arr;
}

const prepareIconNo = (iconNo) => {
  return  iconNo <= 9 ? "0"+iconNo : iconNo;
}