import React, {useState} from 'react';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import MenuButton from '../../Libs/Menu/MenuButton';
import MenuBar from '../../Libs/Menu/MenuBar';

export default function TopComponent(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="top">
            <MenuButton onClick={toggleMenu}/>
            <div className="dateTime">{getCurrentTime()}</div>
            <div className="warning">
                {props.isError ? <WarningAmberRoundedIcon sx={{ fontSize: 50 }} /> : null}
            </div>
            <MenuBar show={isOpen} closePopup={props.closePopup} toggleMenu={toggleMenu}/>
        </div>
    );
}

const getCurrentTime = () => {
    let currentdate = new Date();
    var hours = currentdate.getHours();
    var minutes = ('0'  + currentdate.getMinutes()).slice(-2)
    return `${hours}:${minutes}`
}