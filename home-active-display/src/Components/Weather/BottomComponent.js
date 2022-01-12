import React from 'react';

const FORECAST_ITEM_NO = 8;

export default function BottomComponent(props) {
    return (
      <div className="bottom">
        <LeftBComponent pressure={props.pressure}/>
        <RightBComponent caqiColour={props.caqiColour} caqi={props.caqi} pm10per={props.pm10per} pm25per={props.pm25per} caqiForecast={props.caqiForecast} />
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

function RightBComponent(props) {
  return (
    <div className="rightB">
      <AirlyPollutionComponent caqiColour={props.caqiColour} caqi={props.caqi} pm10per={props.pm10per} pm25per={props.pm25per} />
      <CaqiForecastComponent forecast={props.caqiForecast}/>
    </div>
  ) 
}

function AirlyPollutionComponent(props) {
  return (
    <div className="airPollution">
      <div className="title">CAQI</div>
      <div className="caqi digitFont" style={{backgroundColor: props.caqiColour }}>{props.caqi}</div>
      <div className="title">PM10</div>
      <div className="pm">
        <div className="digitFont">{props.pm10per}</div><div className="digitFont">%</div>
      </div>
      <div className="title">PM25</div>
      <div className="pm">
        <div className="digitFont">{props.pm25per}</div><div className="digitFont">%</div>
      </div>
    </div>
  )
}

function CaqiForecastComponent(props) {
  return (
    <div className="caqiForecast">
      {
        props.forecast ? 
          props.forecast.values.sort(sortByDate).slice(0,FORECAST_ITEM_NO).map((item, index) =>  
            <CaqiForecastItem key={index} item={item}/>)
          : null
      }
    </div>
  )
}

function sortByDate(a,b) {
  if (a.date > b.date) {
    return 1;
  }
  if (a.date < b.date) {
    return -1;
  }
  return 0;
}

function CaqiForecastItem(props) {
  return (
    <div className="caqiItem">
      <div className="digitFont" style={{backgroundColor: props.item.caqiColour }}>
        {props.item.caqi}
      </div>
      <div>
        {new Date(props.item.date).getHours()} 
      </div>
    </div>
  )

}