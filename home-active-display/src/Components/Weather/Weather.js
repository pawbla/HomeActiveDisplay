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
      setResponse(prepareValues(response));
      }

    return (
        <WeatherContext values={response}/>
    )
}

function WeatherContext(props) {

  return (
    <div className="weather">
        <TopComponent />
        <MiddleComponent values={props.values}/>
        <BottomComponent values={props.values} />
    </div>
  )
}

const prepareValues = (data) => {
  return {
    airPollution: {
      pm25percent: data ? prepareValueAndError(data.airPolution.pm25percent) :  prepareDefaultValueAndError(),
      pm10percent: data ? prepareValueAndError(data.airPolution.pm10percent) :  prepareDefaultValueAndError(),
      caqiColor: data ? prepareValueAndError(data.airPolution.caqiColor) :  prepareDefaultValueAndError(),
      caqi: data ? prepareValueAndError(data.airPolution.caqi) :  prepareDefaultValueAndError(),
      forecast: data ? data.airPolution.forecast : prepareDefaultAirPollutionForecast(),   
    },
    day: {
      sunrise: data ? prepareValueAndError(data.sun.rise) : prepareDefaultValueAndError(),
      sunset: data ? prepareValueAndError(data.sun.set) : prepareDefaultValueAndError(),
    },
    weather: {
      pressure: data ? prepareValueAndError(data.weather.pressure) : prepareDefaultValueAndError(),
      text:  data ? prepareValueAndError(data.weather.weatherText) : prepareDefaultValueAndError(),
      icon: data ? prepareValueAndErrorForIcon(data.weather.weatherIcon) : prepareDefaultValueAndError(),
      in: {
        temp: data ? prepareValueAndError(data.in.temperature) : prepareDefaultValueAndError(),
        hum: data ? prepareValueAndError(data.in.humidity) : prepareDefaultValueAndError(),
      },
      out: {
        temp: data ? prepareValueAndError(data.out.temperature) : prepareDefaultValueAndError(),
        hum: data ? prepareValueAndError(data.out.humidity) : prepareDefaultValueAndError(),
      },
      wind: {
        speed: data ? prepareValueAndError(data.weather.windSpeed) : prepareDefaultValueAndError(),
        dirDeg: data ? prepareValueAndError(data.weather.windDirectionDeg) : prepareDefaultValueAndError(),
        dirVal: data ? prepareValueAndError(data.weather.windDirection) : prepareDefaultValueAndError(),
      }
    }
  }
}

const prepareValueAndErrorForIcon = (data) => {
  let newData = prepareValueAndError(data);
  console.log("=== new data ==" + JSON.stringify(newData))
  newData["value"] = (newData.value === DEFAULT_EMPTY ? newData.value : prepareIconNo(newData.value));
  return newData;
}

const prepareValueAndError = (data) => {
  return {
    value: data ? data.value : DEFAULT_EMPTY,
    isError: data ? data.isError : true
  }
}

const prepareDefaultValueAndError = () => {
  return prepareValueAndError(undefined);
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