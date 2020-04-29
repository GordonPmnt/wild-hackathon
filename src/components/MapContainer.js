import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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

    handleDrag = () => {
        const { lat, lng } = this.state;
        const {getNearbyWebcams} = this.props
        const data = getNearbyWebcams({lat:lat, lng:lng, radius: 200})
        console.log(getNearbyWebcams(lat, lng, 200))     
    }

    render(){
        const { lat, lng } = this.state;
        const { getNearbyWebcams } = this.props;

        return(
            <Map
                google={this.props.google}
                zoom={10}
                initialCenter={{ lat: lat, lng: lng}}
                onDragend={e => this.handleDrag(e.google.maps)}
            >
                <Marker position={{lat: lat, lng: lng}} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM'
})(MapContainer)