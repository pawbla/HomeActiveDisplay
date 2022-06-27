import React from 'react';
import './styles.scss';

export default function Popup(props) {
    return (
        <div className="popup">
            {props.text}
        </div>

    )
}