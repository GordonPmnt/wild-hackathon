import React from 'react';
import axios from 'axios';
import { config } from './config';
import MapContainer from './components/MapContainer';

class App extends React.Component {

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
        console.log(webcams)
        return webcams
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

  componentDidMount = () => {
    this.getNearbyWebcams({ lat: 42.44, lng: 3.14, radius: 200 }) //for test purpose only
    this.getWebcam("1576343988")                                  //for test purpose only
  }

  render () {
    return (
      <div>
        <MapContainer 
          getNearbyWebcams={this.getNearbyWebcams}
        />
      </div>
    );
  }
}

export default App;
