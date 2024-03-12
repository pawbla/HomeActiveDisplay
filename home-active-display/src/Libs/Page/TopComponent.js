import React from 'react';
import {BackButton} from '../../Libs/Menu/Button';

export default function TopComponent({component: Component, ...props}) {

    return(
        <div className="top">
            <div>
                <BackButton />
            </div>
            <div>
                {Component ? <Component /> : null}
            </div>            
        </div>
    );
}