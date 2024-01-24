import React from 'react';
import './styles.scss';
import mainPage from '../../Libs/Page/MainPage';
import Menu from './Menu';
import Graph from './Graph';

function History() {
    

    return(
        <div className="history">
            <Menu />
            <Graph />
        </div>
    );
}

export default mainPage(History);