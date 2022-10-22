import React, { Component } from 'react';

import FlatList from './flatList';
import GoogleMap from './googleMap';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList />
        <div className="map-container">
          <GoogleMap />
        </div>
      </div>
    );
  }
}

export default App;
