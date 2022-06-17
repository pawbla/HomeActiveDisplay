import React from 'react';
import './styles.scss';
import TopComponent from './TopComponent';
import MiddleComponent from './MiddleComponent';

export default function SensorInfo(props) {
    return(
        <div className="sensorinfo">
            <TopComponent />
            <MiddleComponent />
        </div>
    );
}