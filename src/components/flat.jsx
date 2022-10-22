import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.url}), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
    };

    return (
      <div className="card" style={style} >
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.description}</h2>
        </div>
        <a className="card-link" href={this.props.url}></a>
      </div>
    );
  }
}

export default Flat;
