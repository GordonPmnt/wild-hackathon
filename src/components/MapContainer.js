import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        lat: 27.271707,
        lng: -81.205376
    }

    componentDidMount = () => {
        const { lat, lng } = this.state;
        const { getNearbyWebcams } = this.props;
        getNearbyWebcams({ lat: lat, lng: lng, radius: 200 })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.state !== prevState){
            const { lat, lng } = this.state;
            const { getNearbyWebcams } = this.props;
            getNearbyWebcams({ lat: lat, lng: lng, radius: 400 })
        }
    }

    handleDrag = (mapProps, map) => {
        const lat = map.center.lat();
        const lng = map.center.lng()
        this.setState({lat, lng}) 
    }

    render(){
        const { lat, lng } = this.state;
        const { webcams } = this.props;
        console.log(webcams)

        return(
            <Map
                google={this.props.google}
                zoom={7}
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