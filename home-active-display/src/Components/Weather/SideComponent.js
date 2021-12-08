import React from 'react';

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
            <img src={`${process.env.PUBLIC_URL}/assets/images/sunIcons/${props.picName}.png`} alt="Obraz jest niedostępny  "/>
                <div className="sun digitFont">{props.sun}</div>
            </div>
        </div>
    )
  }