import React from 'react';
import axios from 'axios';
import { config } from './config';
import MapContainer from './components/MapContainer';
import WindyCam from './components/WindyCam'

class App extends React.Component {
  state = {
    webcams: []
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
        this.setState({ webcams: [...webcams]})
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
      <div>
        <MapContainer 
          getNearbyWebcams={this.getNearbyWebcams}
          webcams={this.state.webcams}
        />
        <WindyCam />
      </div>
    );
  }
}

export default App;
