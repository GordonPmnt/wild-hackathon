import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        lat: 27.271707,
        lng: -81.205376
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

    componentDidMount = () => {
        const { lat, lng } = this.state;
        const { getNearbyWebcams } = this.props;
        getNearbyWebcams({ lat: lat, lng: lng, radius: 200 })

        // TESTING PURPOSE ONLY: DELETE ME WHEN handleclick is working
        //const { getWebcam } = this.props;
        // getWebcam('1417428169')
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

    handleClick = (camId) => {
        const { getWebcam } = this.props;
        //here: handle the choice of cam when clicking on map/marker
        getWebcam(camId)
    }

    // TESTING PURPOSE ONLY: DELETE ME WHEN handleclick is working

    render(){
        const { lat, lng } = this.state;
        const { webcams } = this.props;
        console.log(webcams)

        return(
            <Map
                style={this.styles.map}
                containerStyle={this.styles.map}
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
                        icon={{
                            url: 'https://img.icons8.com/plasticine/2x/marker.png',
                            scaledSize: new this.props.google.maps.Size(64,64)
                        }}
                        onClick={() => this.handleClick(cam.id)}
                    >
                        <InfoWindow>
                            <p>test</p>
                        </InfoWindow>
                    </Marker>
                    )
                }
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM'
})(MapContainer)