import React from 'react';
import './App.css';
import videos from './resources/Videos';
import Video from './components/Video';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="videos">
        {videos.map(function (d, i) {
          return <Video key={i} title={i} id={d.id} tittel={d.title} />;
        })}
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
