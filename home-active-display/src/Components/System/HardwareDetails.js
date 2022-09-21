import React from 'react';
import DetailsItem from './DetailsItem';

export default function HardwareDetails(props) {
    return(
        <div className="m_details">
            <DetailsItem label="Platform label" data={props.data.platformLabel}/>
            <DetailsItem label="Platform ID" data={props.data.platformId}/>
            <DetailsItem label="Model name" data={props.data.modelName}/>
            <DetailsItem label="Processor" data={props.data.processor}/>
            <DetailsItem label="Board type name" data={props.data.boardTypeName}/>
            <DetailsItem label="CPU revision" data={props.data.cpuRevision}/>
            <DetailsItem label="CPU architecture" data={props.data.cpuArchitecture}/>
            <DetailsItem label="CPU temperature" data={props.data.cpuTemperature}/>
            <DetailsItem label="CPU voltage" data={props.data.cpuVoltage}/>
            <DetailsItem label="Date time" data={new Date(props.data.dateTime).toLocaleString("lookup")}/>
        </div>
    )
}