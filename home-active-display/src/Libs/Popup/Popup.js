import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { fetchWrapper } from '../../Libs/RestApi/restWrapper';
import { endpoints } from '../../config';

export default function Popup(props) {
    const port = endpoints.monitoring.port;
    const apiVersion = endpoints.monitoring.shutdown.apiVersion
    const uri = endpoints.monitoring.shutdown.uri

    const navigate = useNavigate();

    const onClick = async(mode) => {
        await fetchWrapper.post(port, apiVersion, uri + "/" + mode, "")
        .catch(error => {console.log("ERROR" + error.message)});
    } 

    const onClickHold = () => {
        onClick("hold");
        navigate("/shutdown/hold")
    }

    const onClickRestart = () => {
        onClick("restart");
        navigate("/shutdown/restart")
    }

    return (
        <div className="popup">
            <PopupButton component={HighlightOffOutlinedIcon} label="Shutdown" onClick={onClickHold}/>
            <PopupButton component={RestartAltOutlinedIcon} label="Restart" onClick={onClickRestart}/>
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