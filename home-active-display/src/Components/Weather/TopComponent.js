import React from 'react';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

export default function TopComponent(props) {
    return(
        <div className="top">
            <div></div>
            <div className="warning">
                {props.isError ? <WarningAmberRoundedIcon sx={{ fontSize: 50 }} /> : null}
            </div>
        </div>
    );
}