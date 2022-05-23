import React from 'react';
import Label from '../common/Label';
import {sortByDate} from '../../utils/utils';

import picSunRise from '../../assets/images/sunIcons/sunrise.png';
import picSunSet from '../../assets/images/sunIcons/sunset.png';

import moon_01 from '../../assets/images/moon/moon_0.png';

const CAQI_NAME = "CAQI";
const PM_10_NAME = "PM10";
const PM_25_NAME = "PM25";
const PERCENT_UNIT = "%";

const SUN_LABEL = "Sun";
const MOON_LABEL = "Moon";
const AIR_POLLUTION_LABEL = "Air Pollution";

const FORECAST_ITEM_NO = 12;

export default function BottomComponent(props) {
    return(
        <div className="bottom">
            <SunRiseSet day={props.values.day}/>
            <MoonInfo moon={props.values.moon}/>
            <AirPolution airPollution={props.values.airPollution}/>
        </div>
    );
}

function SunRiseSet(props) {
  return (
    <div className="sunriseset">  
      <Label label={SUN_LABEL} isError={props.day.isError}/>
      <SunItem time={props.day.sunrise} pic={require(`../../assets/images/sunIcons/sunrise.png`).default}/>
      <SunItem time={props.day.sunset} pic={require(`../../assets/images/sunIcons/sunset.png`).default}/>
    </div>
  )
}

function SunItem(props) {
  return (
      <div className="item">
        <img src={props.pic} alt="Pusty"/>
        <div>{props.time}</div>
      </div>
  )
}

function MoonInfo(props) {
  return (
    <div className="moon">
       <Label label={MOON_LABEL} isError={props.moon.isError}/>
       <img src={require(`../../assets/images/moon/moon_0.png`).default} alt="-"/>
       <div className="text">
         {props.moon.text}
       </div>
    </div>
  ) //{props.icon === "-"? null : <img src={require(`../../assets/images/weatherIcons/${props.icon}.png`).default} alt="-"/>}
}

function AirPolution(props) {
    return (
        <div className="airPolution">
            <Label label={AIR_POLLUTION_LABEL} isError={props.airPollution.isError}/>
            <AirPolutionInfo data={props.airPollution}/>
            <AirPolutionForecast data={props.airPollution}/>
        </div>
    )
}

function AirPolutionInfo(props) {
    return ( 
        <div className="info">
            <div className="name">{CAQI_NAME}:</div>
            <div className="caqi" style={{backgroundColor: props.data.caqiColor }}>{props.data.caqi}</div>
            <div className="name">{PM_10_NAME}:</div>
            <div className="value">{props.data.pm10percent}</div>
            <div className="unit">{PERCENT_UNIT}</div>
            <div className="name">{PM_25_NAME}:</div>
            <div className="value">{props.data.pm25percent}</div>
            <div className="unit">{PERCENT_UNIT}</div>
        </div>
    )
}

function AirPolutionForecast(props) {
    return (
        <div className="forecast">
          {
            props.data.forecast.values.sort(sortByDate).slice(0,FORECAST_ITEM_NO).map((item, index) =>  
              <CaqiForecastItem key={index} item={item}/>)
          }
        </div>
    )
}

function CaqiForecastItem(props) {
  return (
    <div className="item">
      <div className="digitFont" style={{backgroundColor: props.item.caqiColour }}>
        {props.item.caqi}
      </div>
      <div>
        {props.item.date === "-" ? props.item.date : new Date(props.item.date).getHours() } 
      </div>
    </div>
  )
}