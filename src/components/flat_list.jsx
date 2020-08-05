import React, { Component } from 'react';
import Flat from './flat';

const FlatList = (props) => {

 const renderFlats = () => props.flats.map(flat => {
  return <Flat price={flat.price} key={flat.price} name={flat.name} imageUrl={flat.imageUrl} priceCurrency={flat.priceCurrency} selectFlat={flat.selectFlat} />
})
 return(
  <div className="flat-list">
    {renderFlats()}
  </div>
  )
}



export default FlatList
