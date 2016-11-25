import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
  }
  renderInventory(key) {
    const fish = this.props.fishes[key]
    return(
      <div className="fish-edit" key={key}>
        <input name="name" defaultValue={fish.name} type="text" placeholder="Fish Name"/>
        <input name="price" defaultValue={fish.price} type="text" placeholder="Fish Price"/>
        <select name="status" defaultValue={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" defaultValue={fish.desc} placeholder="Fish Desc"></textarea>
        <input name="image" defaultValue={fish.image} type="text" placeholder="Fish Image"/>
      </div>     
      )
  }
	render() {
		return(
			<div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
      {/*method must be passed down one more level*/}
        <AddFishForm addFish={this.props.addFish}/>   
      {/*method must come from where our STATE does (itc App)*/}
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
		)
	}
}

export default Inventory;