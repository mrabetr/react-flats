import React, { Component } from 'react';

import Flat from './flat';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <Flat className="card" />
        </div>
        <div className="map-container">
          Map container
        </div>
      </div>
    );
  }
}

export default App;
