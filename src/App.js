import React from 'react';
import './App.css';
import Form from "./components/Form";
import Map from "./components/Map";
import Marker from "./components/Marker";
import Message from "./components/Message";
import MyCam from "./components/MyCam";
import WindyCam from "./components/WindyCam";
import ScreenShot from "./components/ScreenShot";

function App() {
  return (
    <div className="App">
      <Form />
      <Map />
      <Marker />
      <Message />
      <MyCam />
      < WindyCam />
      <ScreenShot />
      
    </div>
  );
}

export default App;
