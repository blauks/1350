import React from 'react';
import './BottomBar.css';

const BottomBar = props => {
  return (
    <div className="bottombar">
      <div className="lines">
        <div className="lineleft"></div>
        <div className="lineright"></div>
      </div>
      <div className="bottomBarContent"></div>
    </div>
  );
};

export default BottomBar;
