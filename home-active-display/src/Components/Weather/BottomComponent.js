import React from 'react';
import Label from '../common/Label';
import {sortByDate} from '../../utils/utils';
import {DEFAULTS, LABELS} from './Constants';

import picSunRise from '../../assets/images/sunIcons/sunrise.png';
import picSunSet from '../../assets/images/sunIcons/sunset.png';

import moon_01 from '../../assets/images/moon/moon_0.png';

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
      <Label label={LABELS.SUN} isError={props.day.isError}/>
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
       <Label label={LABELS.MOON} isError={props.moon.isError}/>
       <img src={require(`../../assets/images/moon/moon_${props.moon.icon}.png`).default} alt={DEFAULTS.EMPTY}/>
       <div className="text">
         {props.moon.text}
       </div>
    </div>
  ) 
}

function AirPolution(props) {
    return (
        <div className="airPolution">
            <Label label={LABELS.AIR_POLLUTION} isError={props.airPollution.isError}/>
            <AirPolutionInfo data={props.airPollution}/>
            <AirPolutionForecast data={props.airPollution}/>
        </div>
    )
}

function AirPolutionInfo(props) {
    return ( 
        <div className="info">
            <div className="name">{LABELS.CAQI}:</div>
            <div className="caqi" style={{backgroundColor: props.data.caqiColor }}>{props.data.caqi}</div>
            <div className="name">{LABELS.PM_10}:</div>
            <div className="value">{props.data.pm10percent}</div>
            <div className="unit">{LABELS.PERCENT_UNIT}</div>
            <div className="name">{LABELS.PM_25}:</div>
            <div className="value">{props.data.pm25percent}</div>
            <div className="unit">{LABELS.PERCENT_UNIT}</div>
        </div>
    )
}

function AirPolutionForecast(props) {
    return (
        <div className="forecast">
          {
            [...props.data.forecast.values].sort(sortByDate).slice(0,FORECAST_ITEM_NO).map((item, index) =>  
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
        {props.item.date === DEFAULTS.EMPTY ? props.item.date : new Date(props.item.date).getHours() } 
      </div>
    </div>
  )
}