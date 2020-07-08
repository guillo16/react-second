import React, { Component } from 'react';
import CardsList from './cards-list';

class Cards extends Component {
  render() {
    return (
       <div className="cards-container">
       <CardsList />
       </div>
      )
  }
}

export default Cards
