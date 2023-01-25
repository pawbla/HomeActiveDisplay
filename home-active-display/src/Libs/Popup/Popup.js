import React from 'react';
import './styles.scss';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

export default function Popup(props) {
    return (
        <div className="popup">
            <PopupButton component={HighlightOffOutlinedIcon} label="Shutdown"/>
            <PopupButton component={RestartAltOutlinedIcon} label="Restart"/>
            <PopupButton component={CancelOutlinedIcon} label="Cancel" onClick={props.closePopup}/>
        </div>
    )
}

function PopupButton({component: Component, label, onClick, ...props}) {
    return (
        <div className="popupBtn" onClick={onClick}>
            <Component {...props}/>
            <div>
               {label}
            </div>
        </div>
    )
}