import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
   renderFlats = () => this.props.flats.map(flat => {
    return <Flat price={flat.price} key={flat.price} name={flat.name}/>
   })
  render(){

    return(
      <div>
       {this.renderFlats()}
      </div>
      )
  }
}

export default FlatList
