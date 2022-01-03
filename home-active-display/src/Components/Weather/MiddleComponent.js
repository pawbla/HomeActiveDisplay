import React from 'react';
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

 
export default function MiddleComponent(props) {
    return (
        <div className="middle">
            <WindComponent windDegree={getWindDegree(props.weather)} windSpeed={getWindSpeed(props.weather)}/>
            <IconComponent iconNo={getWeatherIcon(props.weather)}/>
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
                <div id="arrowIndicator" style={{ transform: 'rotate(' + props.windDegree + 'deg)' }}><b>></b></div>
                <div>
                    <div className="value digitFont">{props.windSpeed}</div>
                    <div className="unit digitFont">km/h</div>
                </div>
            </div>
        </div>
    )
}

function IconComponent(props) {
    return(
        <div className="icon">
            <div className="title">WEATHER</div> 
            <div className="picture">
                <img src={require(`../../assets/images/weatherIcons/${props.iconNo}.png`).default} alt="Brak obrazka"/>
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

const getWeatherIcon = (weather) => {
    var iconNo =  weather ? weather.weatherIcon.value : 1;
    return iconNo <= 9 ? "0"+iconNo : iconNo; 
}