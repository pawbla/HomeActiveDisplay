import React from 'react';
import DetailsItem from './DetailsItem';

export default function JavaEnvDetails(props) {
    return(
        <div className="m_details">
            <DetailsItem label="Vendor" data={props.data.vendor}/>
            <DetailsItem label="url" data={props.data.vendorUrl}/>
            <DetailsItem label="Version" data={props.data.version}/>
            <DetailsItem label="VM" data={props.data.virtualMachinve}/>
            <DetailsItem label="Runtime" data={props.data.runtime}/>
        </div>
    )
}