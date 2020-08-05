import React, { Component } from 'react';
import Flat from './flat';

const FlatList = (props) => {

 const renderFlats = () => props.flats.map((flat, index) => {
  return <Flat flat={flat} key={flat.price}  selectFlat={props.selectFlat} selected={flat.name === props.selectedFlat.name} index={index} />
})
 return(
  <div className="flat-list">
    {renderFlats()}
  </div>
  )
}



export default FlatList
