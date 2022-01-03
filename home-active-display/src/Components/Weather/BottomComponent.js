import React from 'react';
import MiddleComponent from './MiddleComponent';

export default function BottomComponent(props) {
    return (
      <div className="bottom">
        <LeftBComponent pressure={props.pressure}/>
        <MiddleBComponent caqiColour={props.caqiColour} caqi={props.caqi}/>
        <RightBComponent pm10per={props.pm10per} pm25per={props.pm25per} />
      </div>
    )
}

function LeftBComponent(props) {
  return (
    <div className="leftB">
      <div className="title">PRESSURE</div>
      <div className="pressure">
        <div className="value digitFont">{props.pressure}</div>
        <div className="unit digitFont">hPa</div>
      </div>
    </div>
  )
}

function MiddleBComponent(props) {
  return (
    <div className="middleB">
      <div className="title">CAQI</div>
      <div className="caqi digitFont" style={{backgroundColor: props.caqiColour }}>{props.caqi}</div> 
    </div>
  ) 
}

function RightBComponent(props) {
  return (
    <div className="rightB">
      <AirPolutionComponent title="PM10" perValue={props.pm10per} />
      <AirPolutionComponent title="PM25" perValue={props.pm25per} />
    </div>
  ) 
}

function AirPolutionComponent(props) {
  return (
    <div className="polution">
      <div className="title">{props.title}</div>
      <div>
        <div className="value digitFont">{props.perValue}</div><div className="unit digitFont">%</div>
      </div>
    </div>
  )
}