import React from 'react';
import DetailsItem from './DetailsItem';

export default function MemoryDetails(props) {
    return(
        <div className="m_details">
            <DetailsItem label="Total" data={props.data.total} unit="B"/>
            <DetailsItem label="Used" data={props.data.used} unit="B"/>
            <DetailsItem label="Free" data={props.data.free} unit="B"/>
            <DetailsItem label="Shared" data={props.data.shared} unit="B"/>
            <DetailsItem label="Buffers" data={props.data.buffers} unit="B"/>
            <DetailsItem label="Cached" data={props.data.cached} unit="B"/>
        </div>
    )
}