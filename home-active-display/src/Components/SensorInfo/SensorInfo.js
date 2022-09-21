import React from 'react';
import './styles.scss';
import MiddleComponent from './MiddleComponent';
import mainPage from '../../Libs/Page/MainPage';

function SensorInfo(props) {
    return(
        <MiddleComponent />
    );
}

export default mainPage(SensorInfo);