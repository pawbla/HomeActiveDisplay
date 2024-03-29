import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Button({component: Component, label, path, onClick,  ...props}) {
    return(
        <SimpleButton component={Component} label={label} path={path} exOnClick={onClick} {...props}/>
    )
}

export function BackButton() {
    return (
        <SimpleButton component={ArrowBackIosIcon} className="bbutton" path="/weather"/>
    )
}

export function GoButton({onClickGo}) {

    const onClickGoButton = () => {
        onClickGo()
    }

    return (
        <SimpleButton component={ArrowForwardIosIcon} className="bbutton" exOnClick={onClickGoButton}/>
    )
}

function SimpleButton({component: Component, className, label, path, exOnClick, ...props}) {
    const navigate = useNavigate();

    const onClick = () => {
        exOnClick();
        if (path) {
            navigate(path)
        } 
    }

    return (
        <div className={className} onClick={onClick}>
            <Component {...props}/>
            <div className="material-icons blabel">{label}</div>
        </div>
    );
}

SimpleButton.defaultProps = {
    exOnClick: () => {},
    path: undefined,
    className: "mbutton",
    fontSize: "large"
};