import React from 'react';
import DetailsItem from './DetailsItem';

export default function NetworkDetails(props) {
    return(
        <div className="m_details">
            <DetailsItem label="Host name" data={props.data.hostName}/>
            <Item data={props.data.ipAddress} label="IP"/>
            <Item data={props.data.fqdn} label="FQDN"/>
            <Item data={props.data.nameserver} label="Name server"/>
        </div>
    )
}

function Item(props) {
    return(
        <div>
            {props.data ? 
                props.data.map((appData, index) => 
                <DetailsItem label={`${props.label} ${index}`} data={appData} key={index}/>) : null
            }
        </div>
    )
}
/*{"hostName":"raspberrypi","ipAddress":["11.16.1.3"],"fqdn":["raspberrypi"],"nameserver":["11.16.1.4"]}*/