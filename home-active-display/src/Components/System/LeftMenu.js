import React from 'react';
import {NODES} from './config';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import HardwareOutlinedIcon from '@mui/icons-material/HardwareOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function LeftMenu(props) {

    const selectView = (data) => {
        props.setSelectedNode(data);
    }

    return(
        <div className="m_menu">
            <MenuItem component={ViewModuleOutlinedIcon}
                label={NODES.APPLICATION}
                onClick={selectView}
                selectedNode={props.selectedNode}
                isDisabled={props.isButtonDisabled}/>
            <MenuItem component={HardwareOutlinedIcon}
                label={NODES.HARDWARE}
                onClick={selectView}
                selectedNode={props.selectedNode}
                isDisabled={props.isButtonDisabled}/>
            <MenuItem component={WebhookOutlinedIcon} 
                label={NODES.OS}
                onClick={selectView}
                selectedNode={props.selectedNode}
                isDisabled={props.isButtonDisabled}/>
            <MenuItem component={LanguageOutlinedIcon}
                label={NODES.NETWORK}
                onClick={selectView}
                selectedNode={props.selectedNode}
                isDisabled={props.isButtonDisabled}/>
            <MenuItem component={MemoryOutlinedIcon}
                label={NODES.MEMORY}
                onClick={selectView}
                selectedNode={props.selectedNode}
                isDisabled={props.isButtonDisabled}/>
            <MenuItem component={CoffeeIcon}
                label={NODES.JAVA}
                onClick={selectView}
                selectedNode={props.selectedNode}
                isDisabled={props.isButtonDisabled}/>
        </div>
    )
}

function MenuItem({component: Component, label, selectedNode, onClick, isDisabled, ...props}) {

    return(
        <div className={`m_button ${selectedNode === label ? 'm_button_selected' : ''} ${isDisabled ? 'm_button_locked' : ''}`} 
        title="aa" 
        onClick={() => onClick(label)}>
            <div>
                <Component {...props}/>
            </div>
            <div>
               {firstUpperCase(label)}
            </div>
        </div>
    )
}

const firstUpperCase = (text) => {
    return text.slice(0,1).toUpperCase() + text.slice(1, text.length);
}