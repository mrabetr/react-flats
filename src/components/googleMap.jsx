import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Marker
          lat={59.955413}
          lng={30.337844}
        />
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
