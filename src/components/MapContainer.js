import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            lat: 25.5584,
            lng: -80.4582
        }
    }

    getLatLng = () => {
        const { lat, lng } = this.state
        return {lat, lng}
    }

    handleDrag = (map) => {
        console.log(map)
    }

    render(){
        const { lat, lng } = this.state;
        return(
            <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{ lat: lat, lng: lng}}
          onDragend={e => this.handleDrag(e.google.maps)}
        />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM'
})(MapContainer)