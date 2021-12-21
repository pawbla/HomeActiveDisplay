import React from 'react';
import picSunRise from '../../assets/images/sunIcons/sunrise.png';
import picSunSet from '../../assets/images/sunIcons/sunset.png';

export default function SideComponent(props) {
    return (
        
        <div className="side">
            <div className="title">{props.name}</div>
            <div className="temperature">
                <div className="tempFont digitFont">{props.temperature}</div>
                <div className="unit digitFont">&deg;C</div>
            </div>
            <div className="humidity">
                <div className="humFont digitFont">{props.humidity}</div>
                <div className="unit digitFont">%</div>
            </div>
            <div className="add">
            <img src={require(`../../assets/images/sunIcons/${props.picName}.png`).default} alt="Pusty"/>
                <div className="sun digitFont">{props.sun}</div>
            </div>
        </div>
    )
  }