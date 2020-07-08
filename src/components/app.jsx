import React, { Component } from 'react';
import NavBar from './navbar.jsx';
import Banner from './banner.jsx';
import Cards from './cards.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <div className="title">
          <h2>ABOUT</h2>
        </div>
        <Cards />
      </div>
      )
  }
}

export default App
