import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{ lat: 25.5584, lng: -80.4582}}
        />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDreN_7L3Dv43IkI1jd2t7YBr0I9yCpWkM'
})(MapContainer)