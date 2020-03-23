import React from 'react';
import './Video.css';

const Video = props => {
  return (
    <div className="video">
      <p className="videoTitle">{props.tittel}</p>
      <iframe
        className="videoiFrame"
        title={props.index}
        src={'https://www.youtube.com/embed/' + props.id}
      />
    </div>
  );
};

export default Video;
