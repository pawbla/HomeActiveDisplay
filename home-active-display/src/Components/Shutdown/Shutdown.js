import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

const SHUTDOWN_HOLD_TEXT = "Application is shuting down...";
const SHUTDOWN_RESTART_TEXT = "Application is being restarted now...";
const ERR_TEXT = "Somethin when wrong during shutdown...";

export default function Shutdown(props) {
    const { mode } = useParams();

    return(
    <div className="shutdown">
        <div>
            {getMessage(mode)}
        </div>
    </div>
    )
}

const getMessage = (mode) => {
    let text = ERR_TEXT;
    if (mode === "hold") {
        text = SHUTDOWN_HOLD_TEXT;
    } else if (mode === "restart") {
        text = SHUTDOWN_RESTART_TEXT;
    } 
    return text;
} 