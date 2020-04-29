import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        lat: 25.5584,
        lng: -80.4582
    }
    
    styles = {
        container: {
            width: '50vw',
            height: '75vh',
            margin: '10vh 2.5vw 10vh 5vw',
            position: 'static',
        }
    }

    styles = {
        map: {
            width: '50vw',
            height: '75vh',
            margin: '10vh 2.5vw 10vh 5vw',
            position: 'static',
        }
    }

    getLatLng = () => {
        const { lat, lng } = this.state
        return {lat, lng}
    }

    handleDrag = (map) => {
        const { getNearbyWebcams } = this.props;
        getNearbyWebcams({ lat: 42.44, lng: 3.14, radius: 200 })
        console.log(map)
    }

    render(){
        const { lat, lng } = this.state;
        const { webcams } = this.props;
        console.log(webcams)

        return(
            <Map
                style={this.styles.map}
                containerStyle={this.styles.map}
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