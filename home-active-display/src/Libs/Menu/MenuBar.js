import React from 'react';
import './styles.scss';
import { Button} from './Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function MenuBar(props) {

    return (
        <div className={ "menuBar " + (props.show ? "show" : null)}>
            <Button component={InfoOutlinedIcon} label="Sensor info" path="/sensorInfo" fontSize="large" />
            
        </div>
    );
}