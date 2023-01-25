import React from 'react';
import './styles.scss';
import { Button } from './Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { endpoints } from '../../config';
 
export default function MenuBar(props) {
    const port = endpoints.monitoring.port;
    const apiVersion = endpoints.monitoring.shutdown.apiVersion
    const uri = endpoints.monitoring.shutdown.uri

    const onClickOff = async() => {
        /*await fetchWrapper.post(port, apiVersion, uri, "")
        .catch(error => {console.log("ERROR" + error.message)});*/
        props.closePopup();
        props.toggleMenu();
    } 

    return (
        <div className={ "menuBar " + (props.show ? "show" : null)}>
            <Button component={InfoOutlinedIcon} label="Sensor info" path="/sensorInfo"/>
            <Button component={ContactSupportIcon} label="System" path="/system"/>
            <Button component={PowerSettingsNewIcon} label="OFF" onClick={onClickOff} />
        </div>
    );
}