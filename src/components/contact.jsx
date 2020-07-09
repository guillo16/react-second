import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return(
      <div>
        <form>
        <div className="form-group">
          <h1>Hola</h1>
          <label for="exampleInputEmail1" />
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
        <label for="exampleInputPassword1">
        Password
        </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
          <button type="submit" className="btn btn-primary">
            holaa
          </button>
        </form>
      </div>
      )
  }

}

export default Contact
