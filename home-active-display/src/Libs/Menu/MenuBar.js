import React from 'react';
import './styles.scss';
import { Button } from './Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
 
export default function MenuBar(props) {

    const onClickOff = async() => {
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