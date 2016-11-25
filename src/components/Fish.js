import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
    //"details" pass the state to each Fish, can be templated out and will populate (like variables) 
		//ES6 destructuring to make cleaner details var
    //"index" key for each Fish
    const { details, index } = this.props;
    const isAvailable = details.status === 'available'; //boolean
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';

    return(
			<li className="menu-fish">
        <img src={details.image} alt={details.name}/> {/*no quotes to pass variable inside curlies*/}
        <h3 className="fish-name">
          {details.name}
          {/*js to render out price nicely*/}
          <span className="price">{formatPrice(details.price)}</span>          
        </h3>
        <p>{details.desc}</p>
      {/*must pass an argument (key access, dedicated prop) onclick also*/}
        <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
		)
	}
}

export default Fish;
{/**/}