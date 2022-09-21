import React from 'react';
import DetailsItem from './DetailsItem';

export default function OsDetails(props) {
    return(
        <div className="m_details">
            <DetailsItem label="Name" data={props.data.name}/>
            <DetailsItem label="Version" data={props.data.version}/>
            <DetailsItem label="Architecture" data={props.data.architecture}/>
            <DetailsItem label="Firmware build" data={props.data.firmwareBuild}/>
            <DetailsItem label="Firmware date" data={props.data.firmwareDate}/>
        </div>
    )
}