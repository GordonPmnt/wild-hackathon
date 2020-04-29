import React from 'react';
import axios from 'axios';
import { config } from './config';
import MapContainer from './components/MapContainer';
import SideBar from './components/SideBar'

class App extends React.Component {
<<<<<<< HEAD
  state = {
    webcams: []
  }
  
=======
>>>>>>> 4c896ab5af883cb9426322aef61bf8bbe209584c
  styles = {
    container: {
      display: 'inline-block',
      height: '100vh',
      width: '100vw',
    }
  }

  getNearbyWebcams = ({ lat, lng, radius }) => {
    const baseUrl = 'https://api.windy.com/api/webcams/v2/list'
    const location = `nearby=${lat},${lng},${radius}`
    const property = 'property=live,hd'
    const limit = `limit=${50}`

    axios
    .get(
      `${baseUrl}/${location}/${property}/${limit}?show=webcams:location,image,player&key=${config.API_KEY_WINDY}`
    )
    .then(
      response => {
        const { webcams } = response.data.result
<<<<<<< HEAD
        this.setState({ webcams: [...webcams]})
=======
        return webcams
>>>>>>> 4c896ab5af883cb9426322aef61bf8bbe209584c
      }
    )
    .catch(error => console.log(error))
  }

  getWebcam = webcam => {
    const baseUrl = 'https://api.windy.com/api/webcams/v2/list'
    const webcamRef = `webcam=${webcam}`

    axios
    .get(
      `${baseUrl}/${webcamRef}?show=webcams:location,image,player&key=${config.API_KEY_WINDY}`
    )
    .then(
      response => console.log(response.data)
    )
  }

  render () {
    return (
      <div style={this.styles.container}>
        <MapContainer
          getNearbyWebcams={this.getNearbyWebcams}
          webcams={this.state.webcams}
        />
        <SideBar />
      </div>
    );
  }
}

export default App;
