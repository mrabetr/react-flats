import React, { Component } from 'react';

import Flat from './flat';
import flats from '../data/flats';

class FlatList extends Component {
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
            />
          );
        })}
      </div>
    );
  }
}

export default FlatList;
