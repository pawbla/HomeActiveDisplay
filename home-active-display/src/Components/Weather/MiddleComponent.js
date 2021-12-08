import React from 'react';
 
export default function MiddleComponent(props) {
    return (
        <div className="middle">
            <WindComponent windDegree={getWindDegree(props.weather)} windSpeed={getWindSpeed(props.weather)}/>
            <IconComponent />
        </div>
    )
}

const DEFAULT_EMPTY = "-";

function WindComponent(props) {      

    return(
        <div className="wind">
            <div className="title">WIND</div>
            <div className="compass">
                <div className="letters nletter">N</div>
                <div className="letters sletter">S</div>
                <div className="letters eletter">E</div>
                <div className="letters wletter">W</div>
                <div id="arrowIndicator" style={{ transform: 'rotate(' + props.windDegree + 'deg)' }}>&#11166;</div>
                <div>
                    <div className="value digitFont">{props.windSpeed}</div>
                    <div className="unit digitFont">km/h</div>
                </div>
            </div>
        </div>
    )
}
const picNo = "01";

function IconComponent(props) {
    return(
        <div className="icon">
            <div className="title">WEATHER</div>
            <div className="picture">
                <img src={`${process.env.PUBLIC_URL}/assets/images/weatherIcons/01.png`} alt="Obraz jest niedostępny  "/>
            </div>
        </div>
    )
}

const getWindSpeed = (weather) => {
    return weather ? weather.windSpeed.value : DEFAULT_EMPTY;
  }
  
  const getWindDegree = (weather) => {
    return weather ? weather.windDirectionDeg.value - 90 : 0;
  }