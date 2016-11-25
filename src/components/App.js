import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';


class App extends React.Component {
  constructor() {
    super();

    //bring each method into App comp
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    //initiate state (fmly "getInitialState")
    this.state = {
      fishes:{},
      order: {}
    };
  }

  //checks state just before render
  //storeId was passed in via props
  componentWillMount(){
    //hook into Firebase
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    //check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      //update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
    //solve double render with shouldComponentRender > tells React to wait for other data checks and not re-render on each    
  }

  //stop proceses when you navagate away or... catastrophe
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  //establish & check local storage to preserve order details
  //4:00 19/30
  componentWillUpdate(nextProps, nextState) {
    //params passed down from App <Order />
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
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

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key) {
    //take a copy of our state (spread)
    const order = {...this.state.order}
    //add 1 || first fish ordered
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({order});
  }

	render() {
		return (
			<div className="catch-of-the-day"> 
				<div className="menu">
					<Header pro="prop" bool={true} tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {/*extract an array of keys that you can loop over*/
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} 
              /*unique key for each Fish component for state management details prop to pass info for each fish to its Comp*/
                addToOrder={this.addToOrder}/>)
            }
          </ul>
				</div>
      {/*just passing the state objects you need whole state could be too big*/}
				<Order 
          params={this.props.params} 
          fishes={this.state.fishes} 
          order={this.state.order}
        />
      {/*pass the fn (as PROP) down to the comp where you want to use the method(call it)*/}
				<Inventory 
          fishes={this.state.fishes} 
          addFish={this.addFish} 
          loadSamples={this.loadSamples} 
        />

			</div>
		)
	}
}

export default App;