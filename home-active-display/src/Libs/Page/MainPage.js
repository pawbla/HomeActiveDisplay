import React from 'react';
import './styles.scss';
import TopComponent from './TopComponent';

export default (Component, TopMenu) => {
  return (props) => (
    <div className="mainPage">
      <TopComponent component={TopMenu} />
      <Component {...props} />
    </div>
  );
};