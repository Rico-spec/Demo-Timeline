import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
// import VerticalTimelineElement from './components/Timelineelement';


function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Timeline children={VerticalTimelineElement} /> */}
      <Timeline />
     
    </div>
  );
}

export default App;
