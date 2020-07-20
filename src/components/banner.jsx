import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <div className="banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1518257678582-d5c9bb2e6ec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1194&q=80")'}} >
        <div className="container">
          <h1>Welcome to  the Jungle</h1>
          <br />
          <a href="#" className="btn btn-dark mr-3 btn-lg">Shop</a>
          <a href="#" className="btn btn-danger btn-lg">Contact</a>
        </div>
      </div>
      )
  }
}

export default Banner
