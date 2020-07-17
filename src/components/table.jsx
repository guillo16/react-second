import React, { Component } from 'react';
import Thead from './thead';
import Tbody from './tbody';


class Table extends Component {
  render() {
    const {characterData, removeCharacter} = props
    return(
      <table className="table table-striped table-dark">
        <Thead />
      </table>
      )
  }
}

export default Table

