import React from 'react';
import './styles.scss';

export default function MenuBar(props) {

    return (
        <div className={ "menuBar " + (props.show ? "show" : null)}>
        </div>
    );
}