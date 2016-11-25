import React from 'react';
//named export
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
// write own method, use ref *functions* to access data
//ES6 does not implicitly bind 'this' to Comp (except render)

  //super runs React comp first then allows us to build on top of it, binding for each one
  constructor() {
    super();
    //for each method do:
    this.goToStore = this.goToStore.bind(this);
  }
  //or use in Form onSubmit={(e) => this.goToStore(e)} <= cleaner single use
  //alt onSubmit={this.goToStore.bind(this)}
  goToStore(e) {
    e.preventDefault();
    //'storeInput' because it was done with ref is a DOM element
    const storeId = this.storeInput.value;
    //transition using context methods
    this.context.router.transitionTo('/store/'+ storeId);

  }
 
	render() {
    //has 'this' bound
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
				<button type="submit">Visit Store -></button>
			</form>
			)
	}
}
//surface the router from the parent comp to access it's methods (from 'context', we get 'transitionTo()')
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;