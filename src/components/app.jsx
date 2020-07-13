import React, { Component } from 'react';
import NavBar from './navbar.jsx';
import Banner from './banner.jsx';
import Cards from './cards.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';
import PreFooter from './prefooter.jsx';


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
