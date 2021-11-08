import React, {useEffect, useState} from 'react';
import './styles.css';
import '../../Libs/RestApi/getApi';
import { getApi } from '../../Libs/RestApi/getApi';

const url = "weather/measurements";
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
        let response = await getApi(url, queryParams)
        .then(json => {return json})
        .catch(error => {console.log("ERROR" + error.message)});
        console.log(response)
        setResponse(JSON.stringify(response));
       }

    return (
        <div>
            Weather components

            {JSON.stringify(response)}

        </div>
    )
}

function WeatherContext(props) {
  return (
    <div>
      Weather context
    </div>
  )
}