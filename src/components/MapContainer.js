import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        lat: 25.5584,
        lng: -80.4582
    }

    getLatLng = () => {
        const { lat, lng } = this.state
        return {lat, lng}
    }

    handleDrag = (map) => {
        const { lat, lng } = this.state;
        const { getNearbyWebcams } = this.props;
        getNearbyWebcams({ lat: lat, lng: lng, radius: 200 })
        console.log(map)
    }

    render(){
        const { lat, lng } = this.state;
        const { webcams } = this.props;
        console.log(webcams)

        return(
            <Map
                google={this.props.google}
                zoom={10}
                initialCenter={{ lat: lat, lng: lng}}
                onDragend={e => this.handleDrag(e.google.maps)}
            >
                {webcams.map(cam => <Marker position={{lat: cam.location.latitude, lng: cam.location.longitude}} />)}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM'
})(MapContainer)