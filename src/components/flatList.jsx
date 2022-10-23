import React, { Component } from 'react';

import Flat from './flat';
import flats from '../data/flats';

class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-list">
        {flats.map((flat, index) => {
          return (
            <Flat
              className="card"
              key={index}
              url={flat.imageUrl}
              price={`${flat.price} ${flat.priceCurrency}`}
              description={flat.name}
              lat={flat.lat}
              lng={flat.lng}
              markFlat={this.props.markFlat}
            />
          );
        })}
      </div>
    );
  }
}

export default FlatList;
