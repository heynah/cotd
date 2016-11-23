import React from 'react';
import AddFishForm from './AddFishForm';

class Fish extends React.Component {
	render() {
    //"details" pass the state to each Fish, can be templated out and will populate (like variables) 
		//ES6 destructuring to make cleaner details var
    const { details } = this.props;

    return(
			<li className="menu-fish">
        <img src={details.image} alt={details.name}/> {/*no quotes to pass variable inside curlies*/}
        <h3 className="fish-name">
          {details.name}
          <span className="price">{details.price}</span>
          <p>{details.desc}</p>
        </h3>
      </li>
		)
	}
}

export default Fish;
{/**/}