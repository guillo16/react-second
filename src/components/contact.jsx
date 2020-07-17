import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
       clicked: false,
       border: false
    }
  }

  handleUpdate = () => {
     this.setState({
      clicked: true,
      border: true
     })
  }

  handleNewUpdate = () => {
    this.setState({
      clicked: false,
      border: false
    })
  }
  render() {
    return(
      <div>
        <form>
        <h1 className={this.state.clicked ? "clicked" : ''} onMouseOver={this.handleUpdate} onMouseLeave={this.handleNewUpdate}>Hola</h1>
        <div className="form-group">

          <label />
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
        <label className="guillo">
        Password
        </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
          <button type="submit" className="btn btn-primary">
            holaa
          </button>
        </form>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      )
  }

}

export default Contact
