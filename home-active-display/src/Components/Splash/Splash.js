import React, {useEffect, useState} from 'react';
import './styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import {getWeather} from '../../features/fetchWeather';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

import pic01  from '../../assets/images/splash/splash.png';

export default function Splash(props) {

    const periodTime = 5000;
    const ERROR_INDICATION_TIMEOUT_MINS = 2;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isConnectionError, setConnectionError] = useState(false);

    const {isReady}  = useSelector((state) => state.fetchWeather)

    useEffect(() => {
        dispatch(getWeather());
        errorAfterTimeout();
        const timer = setInterval(() => {
        dispatch(getWeather());
        }, periodTime);
        return () => clearInterval(timer);
      }, []);

    return(
        <div className="splash">
            {isReady ? navigate("/weather") : null}
            {isConnectionError ? <WarningAmberRoundedIcon sx={{ fontSize: 50 }} className="splashWarning" color="primary"/> : null}
            <img src={require(`../../assets/images/splash/splash.png`)} alt="Brak obrazka"/>
            <CircularProgress size={410} className="circular" thickness={2} color="primary"/>
            <div>Starting...</div>
        </div>
    );

    function errorAfterTimeout() {
        setTimeout(() => {setConnectionError(true)},  ERROR_INDICATION_TIMEOUT_MINS * 60 * 1000);
    }


    
}