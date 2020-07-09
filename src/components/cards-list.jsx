import React, { Component } from 'react';

class CardsList extends Component {

  render() {
    const src = [ "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" ];

    return(
      <div className="cards-container">
        <div className="cards">
          <img src={src[0]} />
        </div>
        <div className="cards">
          <img src={src[1]} />
        </div>
        <div className="cards">
          <img src={src[2]} />
        </div>
      </div>
      )
  }
}

export default CardsList
