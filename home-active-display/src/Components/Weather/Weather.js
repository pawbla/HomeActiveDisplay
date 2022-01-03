import React, {useEffect, useState} from 'react';
import './styles.css';
import '../../Libs/RestApi/getApi';
import SideComponent from './SideComponent';
import MiddleComponent from './MiddleComponent';
import BottomComponent from './BottomComponent';
import { getApi } from '../../Libs/RestApi/getApi';

const url = "weather/measurements";
const port = "8082"
const queryParams = "";
const periodTime = 10000;

export default function Weather(props) {

  const [response, setResponse] = useState();

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
      setResponse(response);
      }

    return (
        <WeatherContext values={response}/>
    )
}

function WeatherContext(props) {

  return (
    <div className="weather">
      <div className="top">
        <SideComponent name="IN" 
                      temperature={getInternalTemp(props.values)} 
                      humidity={getInternalHum(props.values)}
                      picName="sunrise"
                      sun={getSunRise(props.values)}/>
        <MiddleComponent weather={getWeather(props.values)}/>
        <SideComponent name="OUT" 
                      temperature={getExternalTemp(props.values)} 
                      humidity={getExternalHum(props.values)} 
                      picName="sunset"
                      sun={getSunSet(props.values)}/>
      </div>
      <BottomComponent pressure={getPressure(props.values)}
                      caqi={getCaqi(props.values)}
                      caqiColour={getCaqiColour(props.values)}
                      pm10per={getPm10Percent(props.values)}
                      pm25per={getPm25Percent(props.values)} />
    </div>
  )
}

const DEFAULT_EMPTY = "-";

const getInternalTemp =(value) => {
  return value ? value.in.temperature.value : DEFAULT_EMPTY;
}

const getInternalHum =(value) => {
  return value ? value.in.humidity.value : DEFAULT_EMPTY;
}

const getExternalTemp =(value) => {
  return value ? value.out.temperature.value : DEFAULT_EMPTY;
}

const getExternalHum =(value) => {
  return value ? value.out.humidity.value : DEFAULT_EMPTY;
}

const getWeather = (value) => {
  return value ? value.weather : undefined;
}

const getSunRise = (value) => {
  return value ? value.sun.rise.value : DEFAULT_EMPTY;
}

const getSunSet = (value) => {
  return value ? value.sun.set.value : DEFAULT_EMPTY;
}

const getPressure = (value) => {
  return value ? value.weather.pressure.value : DEFAULT_EMPTY;
}

const getCaqi = (value) => {
  return value ? value.airPolution.caqi.value : DEFAULT_EMPTY;
}

const getCaqiColour = (value) => {
  return value ? value.airPolution.caqiColor.value : "black";
}

const getPm10Percent = (value) => {
  return value ? value.airPolution.pm10percent.value : DEFAULT_EMPTY;
}

const getPm25Percent = (value) => {
  return value ? value.airPolution.pm25percent.value : DEFAULT_EMPTY;
}
