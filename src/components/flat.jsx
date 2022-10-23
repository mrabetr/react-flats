import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(this.props.lat);
    console.log(this.props.markFlat);
    if (this.props.markFlat) {
      this.props.markFlat(this.props.lat, this.props.lng);
    };
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.url}), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
    };

    return (
      <div className="card" style={style} onClick={this.handleClick} >
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.description}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
