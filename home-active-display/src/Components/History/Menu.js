import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import {DropDown} from '../common/DropDown';
import {GoButton} from '../../Libs/Menu/Button';
import {getValidData, getWeatherHistory, reset} from '../../features/featchWeatherHistory';
import {VALUES, MEASUREMENTS} from './Constants';

export default function Menu() {

    const dispatch = useDispatch();

    const {payload}  = useSelector((state) => state.fetchHistoryValidData)

    useEffect(() => {
        dispatch(getValidData());
        dispatch(reset());
      }, []);

    const getGraphData = () => {
        dispatch(getWeatherHistory({type: selectedType, measurement: selectedMeasurement, year: selectedYear, month: selectedMonth}));
    } 

    const TYPE_MENU = [VALUES.YEAR , VALUES.MONTH];
    const MEASUREMENT_TYPE = [MEASUREMENTS.TEMP_IN, MEASUREMENTS.HUM_IN, MEASUREMENTS.TEMP_OUT, MEASUREMENTS.HUM_OUT, MEASUREMENTS.PRESSURE];

    const [selectedMeasurement, setMeasurement] = useState(VALUES.SELECT);
    const [selectedType, setType] = useState(VALUES.SELECT);
    const [selectedYear, setYear] = useState(VALUES.SELECT);
    const [selectedMonth, setMonth] = useState(VALUES.SELECT);

    const onSelectMeasurement = (type) => {
        setMeasurement(type);
    }

    const onSelectType = (type) => {
        setType(type);
    }

    const onSelectYear = (type) => {
        setYear(type);
    }

    const onSelectMonth = (type) => {
        setMonth(type);
    }

    const isMEasurementNotSelect = () => {
        return selectedMeasurement !== VALUES.SELECT ? true : false;
    }

    const isTypeNotSelect = () => {
        return selectedType !== VALUES.SELECT ? true : false;
    }

    const isYearNotSelectAndTypeIsMonth = () => {
        return (selectedType ===VALUES.MONTH) && (selectedYear !== VALUES.SELECT) ? true : false;
    }

    const isTypeMonthAndMonthIsNotSelected = () => {
        return (selectedType ===VALUES.MONTH) && (selectedMonth !== VALUES.SELECT) ? true : false;
    }

    const isTypeYearAndYearIsNotSelected = () => {
        return (selectedType === VALUES.YEAR) && (selectedYear !== VALUES.SELECT) ? true : false;
    }

    const isGoButton = () => {
        return isTypeMonthAndMonthIsNotSelected() || isTypeYearAndYearIsNotSelected();
    }

    const mapYears = () => {
        return payload.values.map((item) => item.year);
    }

    const mapMonth = () => {
        return payload.values.filter((item) => item.year === selectedYear).flatMap((item) => item.months);
    }
        
    return(
        <div className="historyMenu">
            <DropDown values={MEASUREMENT_TYPE} onSelectItem={onSelectMeasurement} />
            {isMEasurementNotSelect() ? <DropDown values={TYPE_MENU} onSelectItem={onSelectType} /> : null}
            {isTypeNotSelect() ? <DropDown values={mapYears()} onSelectItem={onSelectYear} /> : null}
            {isYearNotSelectAndTypeIsMonth() ? <DropDown values={mapMonth()} onSelectItem={onSelectMonth} /> : null}
            {isGoButton() ? <GoButton onClickGo={getGraphData}/> : null}
        </div>
    );


}