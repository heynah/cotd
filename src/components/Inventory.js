import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	render() {
		return(
			<div>
        <h2>Inventory</h2>
      {/*method must be passed down one more level*/}
        <AddFishForm addFish={this.props.addFish}/>   
      </div>
		)
	}
}

export default Inventory;