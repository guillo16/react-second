import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../data/flats';
import  Example from './new_flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  selectFlat = (index) => {
    this.setState( {selectedFlat: flats[index]} );
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat}/>
        <Example />
      </div>
      )
  }
}

export default App
