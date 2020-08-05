import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

   renderFlats = () => this.props.flats.map(flat => {
    return <Flat price={flat.price} key={flat.price} name={flat.name} imageUrl={flat.imageUrl} priceCurrency={flat.priceCurrency} selectFlat={flat.selectFlat} selectedFlat={this.selectedFlat}/>
   })
  render(){

    return(
      <div className="flat-list">
        {this.renderFlats()}
      </div>
      )
  }
}

export default FlatList
