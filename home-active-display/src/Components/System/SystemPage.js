import React, { useEffect, useState } from 'react';
import './styles.scss';
import mainPage from '../../Libs/Page/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import {getSystemInfo} from '../../features/fetchSystemInfo';
import {NODES} from './config';
import LeftMenu from './LeftMenu';
import ApplicationsDetails from './ApplicationDetails';
import HardwareDetails from './HardwareDetails';
import OsDetails from './OsDetails';
import MemoryDetails from './MemoryDetails';
import NetworkDetails from './NetworkDetails';
import JavaEnvDetails from './JavaEnvDetails';

function SystemPage() {

    const periodTime = 10 * 1000;

    const dispatch = useDispatch();
    const [selectedNode, setSelectedNode] = useState(false);

    const {payload, error}  = useSelector((state) => state.fetchSystemInfo)

    useEffect(() => {
        dispatch(getSystemInfo());
        const timer = setInterval(() => {
        dispatch(getSystemInfo());
        }, periodTime);
        return () => clearInterval(timer);
    }, []);



    return(
        <div className="systemPageMain">
            <LeftMenu isButtonDisabled={isButtonDisabled(payload)} 
                    selectedNode={selectedNode} 
                    setSelectedNode={setSelectedNode}/>
            <div className="m_info">
                {
                    currentDetails(selectedNode, payload)
                }
            </div>
        </div>
    );
}

const isButtonDisabled = (payload) => {
    return Object.keys(payload).length === 0;
}

const currentDetails = (selectedNode, payload) => {
    if (selectedNode === NODES.APPLICATION && !isButtonDisabled(payload)) {
       return <ApplicationsDetails data={payload[NODES.APPLICATION]}/>
    } else if (selectedNode === NODES.HARDWARE && !isButtonDisabled(payload)) {
        return <HardwareDetails data={payload[NODES.HARDWARE]}/>
    } else if (selectedNode === NODES.OS && !isButtonDisabled(payload)) {
        return <OsDetails data={payload[NODES.OS]}/>
    } else if (selectedNode === NODES.NETWORK && !isButtonDisabled(payload)) {
        return <NetworkDetails data={payload[NODES.NETWORK]}/>
    } else if (selectedNode === NODES.MEMORY && !isButtonDisabled(payload)) {
        return <MemoryDetails data={payload[NODES.MEMORY]}/>
    } else if (selectedNode === NODES.JAVA && !isButtonDisabled(payload)) {
        return <JavaEnvDetails data={payload[NODES.JAVA]}/>
    }
    return null;
}

export default mainPage(SystemPage);