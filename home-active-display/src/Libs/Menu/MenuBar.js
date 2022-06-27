import React from 'react';
import './styles.scss';
import { Button } from './Button';
import { postApi } from '../RestApi/apiCalls';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function MenuBar(props) {
    const url = "monitoring/shutdown";
    const port = "8085"

    const onClickOff = async() => {
        await postApi(port, url, "")
        .catch(error => {console.log("ERROR" + error.message)});
        props.closePopup();
        props.toggleMenu();
    } 

    return (
        <div className={ "menuBar " + (props.show ? "show" : null)}>
            <Button component={InfoOutlinedIcon} label="Sensor info" path="/sensorInfo"/>
            <Button component={InfoOutlinedIcon} label="OFF" onClick={onClickOff} />
        </div>
    );
}