import React from 'react';
import axios from 'axios';
import { config } from './config';
import MapContainer from './components/MapContainer';
import SideBar from './components/SideBar'

class App extends React.Component {
  styles = {
    container: {
      display: 'inline-block',
      height: '100vh',
      width: '100vw',
    }
  }
  
  state = {
    webcams: [],
    choosenCam: {}
  }
  
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
      response => this.setState({choosenCam: response.data.result.webcams[0]})
    )
    .catch(error => console.log(error))
  }

  componentDidMount = () => {
    this.getWebcam("1576343988")
  }

  render () {
    const { webcams, choosenCam } = this.state;

    return (
      <div style={this.styles.container}>
        <MapContainer
          getNearbyWebcams={this.getNearbyWebcams}
          getWebcam={this.getWebcam}
          webcams={webcams}
        />
        <SideBar  
          choosenCam={choosenCam}
        />
      </div>
    );
  }
}

export default App;
