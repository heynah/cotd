import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

//import  { render } from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    //bring method into App comp
    this.addFish = this.addFish.bind(this);

    //initiate state (fmly "getInitialState")
    this.state = {
      fishes:{},
      order: {}
    };
  }

  addFish(fish) {
    //14:00 13/30
    //copy current (existing) state & update 
    //spread {...} takes every item from our object and spreads it into the object
    const fishes = {...this.state.fishes};
    //add in new fish w/unique key - timestamp is incremental
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    //alt (poorer performance):
    //this.state.fishes.fish1 = fish;

    //set state (specific)
    //{fishes:fishes == fishes} when they are the same
    this.setState({ fishes })

  }

	render() {
		return (
			<div className="catch-of-the-day"> 
				<div className="menu">
					<Header pro="prop" bool={true} tagline="Fresh Seafood Market"/>
				</div>
				<Order/>
      {/*pass the fn (as PROP) down to the comp where you want to use the method(call it)*/}
				<Inventory addFish={this.addFish} />
			</div>
		)
	}
}

export default App;