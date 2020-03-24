import React from 'react';
import './BottomBar.css';

const BottomBar = props => {
  return (
    <div className="bottombar">
      <div className="lines">
        <div className="lineleft"></div>
        <div className="lineright"></div>
      </div>
      <div className="bottomBarContent">
        <div className="bottomBarNettsider">
          <p className="contentTitle">Våre nettsider:</p>
          <a
            href="https://davidbrooksfoto.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            David Brooks
          </a>
          <a
            href="https://morten.brun.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Morten Brun
          </a>
        </div>
        <div className="bottomBarSosialeMedier">
          <p className="contentTitle">Følg oss på sosiale medier:</p>
          <div className="sosialeMedier">
            <a
              href="https://www.facebook.com/1350.no"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + 'fbLogo.png'}
                alt="Facebook logo"
                className="sosialeMedierLogo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
