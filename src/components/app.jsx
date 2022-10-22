import React, { Component } from 'react';

import FlatList from './flatList';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList />
        <div className="map-container">
          Map container
        </div>
      </div>
    );
  }
}

export default App;
