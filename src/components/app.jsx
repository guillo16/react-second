import React, { Component } from 'react';
import NavBar from './navbar';
import Banner from './banner';
import Cards from './cards';
import Contact from './contact';
import Footer from './footer';
import PreFooter from './prefooter';
import Table from './table';


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
        <PreFooter />
        <Footer />
      </div>
      )
  }
}

export default App
