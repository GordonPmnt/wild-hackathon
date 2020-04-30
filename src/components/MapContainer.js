import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        latLng:{
            lat: 27.271707,
            lng: -81.205376
        },
        selectedPlace: "",
        activeMarker: "",
        showingInfoWindow: true,
        webcams: this.props.webcams
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
        const { lat, lng } = this.state.latLng;
        const { getNearbyWebcams } = this.props;
        getNearbyWebcams({ lat: lat, lng: lng, radius: 200 })
        
        // TESTING PURPOSE ONLY: DELETE ME WHEN handleclick is working
        //const { getWebcam } = this.props;
        // getWebcam('1417428169')
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.state.latLng !== prevState.latLng){
            const { lat, lng } = this.state.latLng;
            const { getNearbyWebcams } = this.props;
            getNearbyWebcams({ lat: lat, lng: lng, radius: 400 })      
        }
    }

    handleDrag = (mapProps, map) => {
        const lat = map.center.lat();
        const lng = map.center.lng()
        this.setState({latLng:{lat, lng}}) 
    }

    handleClick = (camId) => {
        const { getWebcam } = this.props;
        //here: handle the choice of cam when clicking on map/marker
        getWebcam(camId)
    }

    // ToDo : fix over display ((re)rendering issue)
    /* handleMouseOver = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    } */

    render(){

        const { lat, lng } = this.state.latLng;
        const { webcams, postcardView } = this.props;

        console.log(webcams)

        return( postcardView ||
            <Map
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
                            url: 'https://images.getbento.com/accounts/434f2b7047292519f2ff31acf678374b/media/images/87861map-marker-rosa-mexicano.png',
                            scaledSize: new this.props.google.maps.Size(40,40)
                        }}
                        onClick={() => this.handleClick(cam.id)}
                        // onMouseover={(props, marker, e) => this.handleMouseOver(props, marker, e)}
                    />
                    )
                }
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow} >
                    <p>test</p>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM'
})(MapContainer)