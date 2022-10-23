import React, { Component } from 'react';

import FlatList from './flatList';
import GoogleMap from './googleMap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 48.8566,
      lng: 2.3522
    };
  }

  markFlat = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  }

  render() {
    return (
      <div>
        <FlatList markFlat={this.markFlat} />
        <div className="map-container">
          <GoogleMap lat={this.state.lat} lng={this.state.lng} />
        </div>
      </div>
    );
  }
}

export default App;
