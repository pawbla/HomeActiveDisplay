import React from 'react';
import DetailsItem from './DetailsItem';

export default function ApplicationsDetails(props) {
    return(
        <div className="m_details">
            {props.data ? 
                props.data.map((appData, index) => 
                <ApplicationItem key={index} appData={appData}/>) : null
            }
        </div>
    )
}

function ApplicationItem(props) {
    return(
        <div className="m_item">
            <div className={`m_title ${props.appData.health ? 'm_error' : ''}`}>{props.appData.name}</div>
            <DetailsItem label="Version" data={props.appData.version}/>
            <DetailsItem label="Port" data={props.appData.port}/>
            <DetailsItem label="Health check date" data={new Date(props.appData.dateTime).toLocaleString("lookup")}/>
        </div>
    )
}