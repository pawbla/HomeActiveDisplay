import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function Button({component: Component, label, path,  ...props}) {
    return(
        <SimpleButton component={Component} className="mbutton" label={label} path={path} {...props}/>
    )
}

export function BackButton() {
    return (
        <SimpleButton component={ArrowBackIosIcon} className="bbutton" path="/" fontSize="large"/>
    )
}

function SimpleButton({component: Component, className, label, path,  ...props}) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(path) 
    }

    return (
        <div className={className} onClick={onClick}>
            <Component {...props}/>
            <div className="material-icons blabel">{label}</div>
        </div>
    );
}