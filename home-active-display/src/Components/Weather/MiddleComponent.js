import React from 'react';
import { BarChart, XAxis, YAxis, Bar,Tooltip } from 'recharts';

import Label from '../common/Label';
import {calculateHistory} from '../../utils/pressureUtils';
import {DEFAULTS, LABELS} from './Constants';

import pic01  from '../../assets/images/weatherIcons/01.png';
import pic02  from '../../assets/images/weatherIcons/02.png';
import pic03  from '../../assets/images/weatherIcons/03.png';
import pic04  from '../../assets/images/weatherIcons/04.png';
import pic05  from '../../assets/images/weatherIcons/05.png';
import pic06  from '../../assets/images/weatherIcons/06.png';
import pic07  from '../../assets/images/weatherIcons/07.png';
import pic08  from '../../assets/images/weatherIcons/08.png';
import pic11  from '../../assets/images/weatherIcons/11.png';
import pic12  from '../../assets/images/weatherIcons/12.png';
import pic13 from '../../assets/images/weatherIcons/13.png';
import pic14  from '../../assets/images/weatherIcons/14.png';
import pic15  from '../../assets/images/weatherIcons/15.png';
import pic16  from '../../assets/images/weatherIcons/16.png';
import pic17  from '../../assets/images/weatherIcons/17.png';
import pic18  from '../../assets/images/weatherIcons/18.png';
import pic19  from '../../assets/images/weatherIcons/19.png';
import pic20  from '../../assets/images/weatherIcons/20.png';
import pic21  from '../../assets/images/weatherIcons/21.png';
import pic22  from '../../assets/images/weatherIcons/22.png';
import pic23  from '../../assets/images/weatherIcons/23.png';
import pic24  from '../../assets/images/weatherIcons/24.png';
import pic25  from '../../assets/images/weatherIcons/25.png';
import pic26  from '../../assets/images/weatherIcons/26.png';
import pic29  from '../../assets/images/weatherIcons/29.png';
import pic30  from '../../assets/images/weatherIcons/30.png';
import pic31  from '../../assets/images/weatherIcons/31.png';
import pic32  from '../../assets/images/weatherIcons/32.png';
import pic33  from '../../assets/images/weatherIcons/33.png';
import pic34  from '../../assets/images/weatherIcons/34.png';
import pic35  from '../../assets/images/weatherIcons/35.png';
import pic36  from '../../assets/images/weatherIcons/36.png';
import pic37  from '../../assets/images/weatherIcons/37.png';
import pic38  from '../../assets/images/weatherIcons/38.png';
import pic39  from '../../assets/images/weatherIcons/39.png';
import pic40  from '../../assets/images/weatherIcons/40.png';
import pic41  from '../../assets/images/weatherIcons/41.png';
import pic42  from '../../assets/images/weatherIcons/42.png';
import pic43  from '../../assets/images/weatherIcons/43.png';
import pic44  from '../../assets/images/weatherIcons/44.png';

import compass  from '../../assets/images/utils/compass.png';

const CHART_OFFSET = 1;

export default function MiddleComponent(props) {
    return(
        <div className="middle">
            <LeftSide pressure={props.values.pressure}/>
            <CenterSide weather={props.values.weather} wind={props.values.wind}/>
            <RightSide in={props.values.in} out={props.values.out}/>
        </div>
    );
}

function LeftSide(props) {
    return (
        <div className="left">
            <Empty />
            <PressureComponent pressure={props.pressure}/>
        </div>
    )
}

function CenterSide(props) {
    return (
        <div className="center">
            <WindComponent wind={props.wind}/>
            <WeatherComponent text={props.weather.text} icon={props.weather.icon} isError={props.weather.isError}/>
        </div>
    )
}

function RightSide(props) {
    return (
        <div className="right">
            <TempHumComponent label={LABELS.IN} temp={props.in.temp} hum={props.in.hum} isError={props.in.isError}/>
            <TempHumComponent label={LABELS.OUT} temp={props.out.temp} hum={props.out.hum} isError={props.out.isError}/>
        </div>
    )
}

function TempHumComponent(props) {
    return (
        <div>
           <Label label={props.label} isError={props.isError}/>
           <div className="temp">
                <div className="value">{props.temp}</div>
            <div className="unit">&deg;C</div>
            </div>
           <div className="hum">
                <div className="value">{props.hum}</div>
                <div className="unit">{LABELS.PERCENT_UNIT}</div>
            </div>    
        </div>
    )
}

function WindComponent(props) {
    return (
        <div className="wind">
            <Label label={LABELS.WIND} isError={props.wind.isError}/>
            <div className="measurements">
                <div className="value">{props.wind.speed}</div>
                <div className="unit">km/h</div>
            </div>
            <div className="pic">
                <img src={require(`../../assets/images/utils/compass.png`).default} alt="Brak obrazka"/>
                <div className="value">{props.wind.dirVal}</div>
                <div className="indicator" style={{ transform: 'rotate(' + props.wind.dirDeg + 'deg)' }}>
                    <img src={require(`../../assets/images/utils/indicator.png`).default} alt="Brak obrazka"/>
                </div>
            </div>
            
        </div>
    )
}

function WeatherComponent(props) {
    return (
        <div className="weather">
            <Label label={LABELS.WEATHER} isError={props.isError}/>
            {props.icon === DEFAULTS.EMPTY? null : <img src={require(`../../assets/images/weatherIcons/${props.icon}.png`).default} alt={DEFAULTS.EMPTY}/>}
            <div className="text">{props.text}</div>
        </div>
    )
}

function Empty() { //Rename if needed
    return (
        <div>
            
        </div>
    )
}

function PressureComponent(props) {
    return (
        <div className="pressure">
            <Label label={LABELS.PRESSURE} isError={props.pressure.isError}/>
            <div className="current">
                <div className="value">{props.pressure.pressure}</div>
                <div className="unit">hPa</div>
            </div>
            <div className="graph">
                <BarChart 
                    width={200} 
                    height={70} 
                    data={calculateHistory(props.pressure.history, props.pressure.pressure)} 
                    barCategoryGap={1}>
                    <XAxis dataKey="name" />
                    <YAxis 
                        domain={[getMinWithOffset(props.pressure.history), getMaxWithOffset(props.pressure.history)]} 
                        hide={true}/> 
                    <Bar dataKey="value" fill="whitesmoke" />
                </BarChart>
            </div>
        </div>
    )
}

const getMinWithOffset = (pressureArr) => {
    return Math.min(...pressureArr.map(i => i.value)) - CHART_OFFSET;
}

const getMaxWithOffset = (pressureArr) => {
    return Math.max(...pressureArr.map(i => i.value)) + CHART_OFFSET;
}