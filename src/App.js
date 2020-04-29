import React from 'react';
import axios from 'axios';
import { config } from './config';

class App extends React.Component {

  getNearbyWebcams = ({ lat, lng, radius }) => {
    const baseUrl = 'https://api.windy.com/api/webcams/v2/list'
    const location = `nearby=${lat},${lng},${radius}`
    const property = 'property=live,hd'

    axios
    .get(
      `${baseUrl}/${location}/${property}?key=${config.API_KEY_WINDY}`
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
    const loc = { lat: 42.44, lng: 3.14, radius: 100 }
    this.getNearbyWebcams(loc)
  }

  render () {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
