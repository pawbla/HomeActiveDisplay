import React, {useEffect, useState} from 'react';
import './styles.css';
import '../../Libs/RestApi/getApi';
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
      <TempAndHumidity name="IN" temperature={getInternalTemp(props.values)} humidity={getInternalHum(props.values)}/>
      <TempAndHumidity name="OUT" temperature={getExternalTemp(props.values)} humidity={getExternalHum(props.values)}/>
    </div>
  )
}

function TempAndHumidity(props) {
  return (
    <div className="tempAndHum">
        <div>{props.name}</div>
        <div>
          <div className="digitalFont tempFont">{props.temperature}</div><div className="digitalFont unit">&deg;C</div>
        </div>
        <div>
          <div className="digitalFont humFont">{props.humidity}</div><div className="digitalFont unit">%</div>
        </div>
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