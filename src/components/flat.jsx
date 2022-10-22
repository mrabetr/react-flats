import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg";
    const price = "150 EUR";
    const description = "Super 60m2 in trendy neighborhood!";
    const style = {
      backgroundImage: `url(${url}), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
    };

    return (
      <div className="card" style={style} >
        <div className="card-category">{price}</div>
        <div className="card-description">
          <h2>{description}</h2>
        </div>
        <a className="card-link" href={url}></a>
      </div>
    );
  }
}

export default Flat;
