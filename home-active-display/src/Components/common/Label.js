import React from 'react';
import './styles.scss';

export default function Label(props) {
    return(
        <div className="label" style={{backgroundColor: props.isError ? "red" : undefined }}>
            {props.label}
        </div>
    );
}