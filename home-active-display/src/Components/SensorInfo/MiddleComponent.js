import React, {useEffect, useState} from 'react';
import { getApi } from '../../Libs/RestApi/apiCalls';

export default function MiddleComponent(props) {

    const url = "weather/status";
    const port = "8082"
    const queryParams = "";
    const periodTime = 10 * 1000;

    const [response, setResponse] = useState({});
    const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
      getResponse();
      const timer = setInterval(() => {
      getResponse();
      }, periodTime);
      return () => clearInterval(timer);
    }, []);

    const getResponse = async() => {
      await getApi(port, url, queryParams)
      .then(json => {setResponse(json)})
      .catch(error => {console.log("ERROR" + error.message)});
    }

    const onClickSelectItem = (item) => {
        setSelectedItem(item);
    }

    const selectItem = (arr) => {
        return (arr && selectedItem !== undefined) ? arr[selectedItem] : null;
    }

    return(
        <div className="middle">
            <SensorsList connectors={response.connectors} onClick={onClickSelectItem}/>
            <SensorDetails item={selectItem(response.connectors)}/>
        </div>
    );
}

function SensorsList(props) {
    return (
        <div className="slist">
            {props.connectors ? props.connectors.map((item, index) => 
            <Item name={item.name} isError={item.isError} key={index} index={index} onClick={props.onClick}/>) : null
            }  
        </div>
    )
}

function Item(props) {
    return (
        <div className="item" onClick={() => props.onClick(props.index)}>
            <div className="circle" style={{backgroundColor: setIsErrorInfo(props.isError)}}></div>
            <div className="text">{props.name}</div>
        </div>
    )
}

const setIsErrorInfo = (isError) => {
    return isError ? "red" : "green";
}

function SensorDetails(props) {
    return (
        <div className="sdetails">
            { props.item ? 
            <div>
                <div>{props.item.name}</div>
                <DetailInfo name="Provider" value={props.item.provider} />
                <DetailInfo name="Link" value={props.item.link} />
                <DetailInfo name="Last measurement" value={props.item.date} />
                <DetailInfo name="ResponseCode" value={props.item.responseCode} />
                <DetailInfo name="Error message" value={props.item.errorMessage} />
                <RequestCounter name="Daily:" counter={props.item.dailyCounter}/>
                <RequestCounter name="Summarize:" counter={props.item.sumCounter}/>
            </div> : null
            }
        </div>
    )
}

function DetailInfo(props) {
    return (
        props.value !== "" ?
         <div>
            {props.name}: {props.value}
        </div> : null
    )
}

function RequestCounter(props) {
    return (
        console.log(JSON.stringify(props)),
        props.counter ?
        <div className="reqCnt">
           {props.name}
           <ul>
               <li>Requests: {props.counter.requests}</li>
               <li>Errors: {props.counter.errors}</li>
               <li>Errors[%]: {getPercent(props.counter.requests, props.counter.errors)}</li>
            </ul>
       </div> : null
    )
}

const getPercent = (requests, errors) => {
    return Math.round((errors * 100) / requests);
}