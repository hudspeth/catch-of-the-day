/* store picker */
import React from 'react';
import { History } from 'react-router';
import halp from '../helpers.js'


var StorePicker = React.createClass({
  mixins : [History],
  goToStore : function(event){
    event.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  },
  render : function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/*comment*/}
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" defaultValue={halp.getFunName()} />
        <input type="Submit" value="Submit"/>
      </form>
    )
  }
});

export default StorePicker;
