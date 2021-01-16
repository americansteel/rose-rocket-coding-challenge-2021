import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}></Map>
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyDs5ueSIbvyqZixojUPIXgMYXCt0pKp9RM'
    apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);