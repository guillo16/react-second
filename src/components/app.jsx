import React, { Component } from 'react';
import NavBar from './navbar.jsx';
import Banner from './banner.jsx';
import Cards from './cards.jsx';
import Contact from './contact.jsx';


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
        <Contact />
      </div>
      )
  }
}

export default App
