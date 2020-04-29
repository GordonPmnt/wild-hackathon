import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {

    }


    render(){
        return(
            <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM
})(MapContainer)