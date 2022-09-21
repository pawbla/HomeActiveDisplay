import React from 'react';
import './styles.scss';
import TopComponent from './TopComponent';

export default (Component) => {
  return (props) => (
    <div className="mainPage">
      <TopComponent />
      <Component {...props} />
    </div>
  );
};