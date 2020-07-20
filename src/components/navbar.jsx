import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="new-navbar d-flex justify-content-between align-items-center">
        <div className="logo">
          <h2>GUILLo</h2>
        </div>
        <div className="nav-links">
          <a href="#">Shop</a>
          <a href="#">Trend</a>
          <a href="#">About</a>
        </div>
        <div className="nav-links">
          <a href="#">User</a>
        </div>

      </div>
      )
  }
}

export default NavBar
