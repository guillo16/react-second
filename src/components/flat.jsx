import React, { Component } from 'react';
import flats from '../data/flats';

class Flat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0]
    }
  }

   handleClick = (index) => {
      this.setState( {
        selectedFlat: flats[index]
      })
  }
  render() {
    return(
     <div className={`card ${ this.state.selectedFlat ? 'active' : null }`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.imageUrl}')`}}>
      <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
      <div className="card-description">
        <h2>{this.props.name}</h2>
      </div>
      <a className="card-link" href="#" onClick={this.handleClick}></a>
     </div>
     )
  }
}

export default Flat



