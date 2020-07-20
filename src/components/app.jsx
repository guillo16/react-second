import React, { Component } from 'react';
import  NavBar from './navbar.jsx';
import  Banner from './banner.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Shopping'
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Tittle title={this.state.title}/>
      </div>
      )
  }
}

export default App
