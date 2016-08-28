/* Fish */

import React from 'react';
import halp from '../helpers.js';

var Fish = React.createClass({
  onButtonClick :function(){
    console.log("going to add the fish: ", this.props.index);
    var key = this.props.index;
    this.props.addToOrder(key);
  },
  render : function(){
    var details = this.props.details;
    var isAvailable = (details.status === 'available' ? true : false);
    var buttonText = (isAvailable ? 'Add to Order' : "Sold Out");
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{halp.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    )
  },
  propTypes : {
    details : React.PropTypes.object.isRequired
  }
});

export default Fish;
