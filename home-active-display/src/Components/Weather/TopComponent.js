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
            <div className="warning">
                {props.isError ? <WarningAmberRoundedIcon sx={{ fontSize: 50 }} /> : null}
            </div>
            <MenuBar show={isOpen} closePopup={props.closePopup} toggleMenu={toggleMenu}/>
        </div>
    );
}