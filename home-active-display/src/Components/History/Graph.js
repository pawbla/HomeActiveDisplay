import React from 'react';
import './styles.scss';
import {LineChart, XAxis, YAxis, Legend, Line, Label, CartesianGrid} from 'recharts';
import {VALUES, LABELS, TYPES} from './Constants';

import { useSelector } from 'react-redux';

export default function Graph() {

    const MAIN_GRAPH_COLOUR = "whitesmoke";
    const LINE_WIDTH = 2;

    const {payload}  = useSelector((state) => state.fetchWeatherHistoryData);

    const getXAxisLabel = () => {
        return payload.period === VALUES.MONTH ? LABELS.DAYS : LABELS.MONTHS;
    }

    const getXAxisDayaKey = () => {
        return payload.period === VALUES.MONTH ? VALUES.DAY : VALUES.MONTH;
    }

    const getYAxisLabel = () => {
        if (payload.type === TYPES.TEMPERATURE) {
            return String.fromCharCode(176) + "C";
        } else if (payload.type === TYPES.HUMIDITY) {
            return "%";
        } else if (payload.type === TYPES.PRESSURE) {
            return "hPa";
        } else {
            return "";
        }
    }

    const getMinValue = () => {
        let min = payload.history.map(i => i.min).sort()[0];
        
        return min-2;
    }

    const getMaxValue = () => {
        let len = payload.history.length
        let max = payload.history.map(i => i.max).sort()[len-1];

        return max+2;
    }
    
    return(
        <div className="historyGraph">
            {Object.keys(payload).length === 0 ? null :
            <LineChart width={780} height={390} data={payload.history} margin={{ top: 20, right: 0, left: 0, bottom: 10 }}>
                <XAxis dataKey={getXAxisDayaKey()} tick={{ fill: MAIN_GRAPH_COLOUR }} tickLine={{ stroke: MAIN_GRAPH_COLOUR }} axisLine={{ stroke: MAIN_GRAPH_COLOUR }} >
                    <Label value={getXAxisLabel()} offset={-2} position="insideBottom" fill={MAIN_GRAPH_COLOUR}/>
                </XAxis>
                <YAxis domain={[getMinValue(), getMaxValue()]} scale="linear" tick={{ fill: MAIN_GRAPH_COLOUR }} tickLine={{ stroke: MAIN_GRAPH_COLOUR }} axisLine={{ stroke: MAIN_GRAPH_COLOUR }}>
                    <Label value={getYAxisLabel()} offset={5} position="top" fill={ MAIN_GRAPH_COLOUR}/>
                </YAxis>
                <Legend verticalAlign="top" align="right"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="mean" stroke="#8884d8" strokeWidth={LINE_WIDTH} legendType="square"/>
                <Line type="monotone" dataKey="min" stroke="blue" strokeWidth={LINE_WIDTH} legendType="square" />
                <Line type="monotone" dataKey="max" stroke="red" strokeWidth={LINE_WIDTH} legendType="square" />
            </LineChart>}
        </div>
    );
}