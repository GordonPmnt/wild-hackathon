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
      `${baseUrl}/${location}/${property}/${limit}?key=${config.API_KEY_WINDY}`
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

  componentDidMount = () => {
    const loc = { lat: 42.44, lng: 3.14, radius: 200 } //for test purpose only
    this.getNearbyWebcams(loc)                         //for test purpose only
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
