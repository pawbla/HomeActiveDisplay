import React from 'react';
import './styles.scss';

export default function Label(props) {
    return(
        <div className="label">
            {props.label}
        </div>
    );
}