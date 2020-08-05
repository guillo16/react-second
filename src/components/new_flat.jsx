import React, { Component } from 'react';

class Example extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Please press the button',
      clicked: false
    }
  }

  handleChange = () =>  {
    this.setState( {
    text: 'Thanks for subscribe',
    clicked: true
    })
  }
   render(){
    return(
      <div>
        <h2 className={this.state.clicked ? 'clicked' : null}>{this.state.text}</h2>
        <button onClick={this.handleChange}>Subscrive </button>
      </div>
      )
   }
}

export default Example
