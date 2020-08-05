import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return(
       <div>
          <h2>{this.props.price}</h2>
          <h3>{this.props.name}</h3>
       </div>
      )
  }
}

export default Flat
