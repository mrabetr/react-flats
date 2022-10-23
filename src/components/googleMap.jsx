import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    // center: {lat: 59.955413, lng: 30.337844},
    zoom: 11
  };

  render() {
    const center = {lat: this.props.lat, lng: this.props.lng};
    console.log(this.props.lat);
    console.log("from GMaps");
    return (
       <GoogleMapReact
        // defaultCenter={this.props.center}
        defaultCenter={center}
        defaultZoom={this.props.zoom}
      >
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
        />
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
