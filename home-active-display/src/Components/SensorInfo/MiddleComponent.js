import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getSensorInfo} from '../../features/fetchSensorInfo';

export default function MiddleComponent(props) {

    const periodTime = 10 * 1000;

    const dispatch = useDispatch();

    const [selectedItem, setSelectedItem] = useState();

    const {payload}  = useSelector((state) => state.fetchSensorInfo)

  useEffect(() => {
      dispatch(getSensorInfo());
      const timer = setInterval(() => {
      dispatch(getSensorInfo());
      }, periodTime);
      return () => clearInterval(timer);
    }, []);

    const onClickSelectItem = (item) => {
        setSelectedItem(item);
    }

    const selectItem = (arr) => {
        return (arr && selectedItem !== undefined) ? arr[selectedItem] : null;
    }

    return(
        <div className="sensorInfoMain">
            <SensorsList connectors={payload.connectors} onClick={onClickSelectItem}/>
            <SensorDetails item={selectItem(payload.connectors)}/>
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
                <DetailInfo name="Response Code" value={props.item.responseCode} />
                <DetailInfo name="Response Date" value={new Date(props.item.date).toLocaleString()} />
                <DetailInfo name="Ok Response Date" value={new Date(props.item.okResponseDate).toLocaleString()} />
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