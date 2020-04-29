import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        lat: 25.5584,
        lng: -80.4582
    }

    componentDidMount = () => {
        const { lat, lng } = this.state;
        const { getNearbyWebcams } = this.props;
        getNearbyWebcams({ lat: lat, lng: lng, radius: 200 })
    }

    handleDrag = (e) => {
       
    }

    handleClick = () => {
        
        
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
                onDragend={this.handleDrag}
            >
                {
                webcams.map(cam => 
                    <Marker 
                        key={cam.id} 
                        position={{
                                lat: cam.location.latitude, 
                                lng: cam.location.longitude
                            }}
                        onClick={this.handleClick}
                    />)
                }
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM'
})(MapContainer)