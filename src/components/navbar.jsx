import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return (
       <div className="navbar-wrapper">
       <div className="logo">
        <h2>Guillo</h2>
       </div>
       <div className="links">
        <p>About</p>
        <p>Content</p>
       </div>
       </div>
      )
  };
}

export default NavBar;
