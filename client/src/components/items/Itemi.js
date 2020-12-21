import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemContext from '../../context/item/itemContext';

const Itemi = ({ itemi }) => {
	console.log("ITEM ",itemi);
	const itemContext = useContext(ItemContext);
    //const { deleteItem, setCurrent, clearCurrent } = itemContext;
	const { name, price, stock, description, image } = itemi;
	
	return (
		<div class="card">
		  	<div class="card-image">
		    	<figure class="image is-4by3">
		      		<img src={image} alt="Placeholder" />
		    	</figure>
		  	</div>
			<div class="card-content">
				<div class="media">
				    <div class="media-left">
				    	<figure class="image is-48x48">
				          <img src={image} alt="Placeholder" />
				        </figure>
				    </div>
				    <div class="media-content">
				    	<p class="title is-4">{name}</p>
				        <p class="subtitle is-6"> ${price}</p>
				    </div>
				</div>
				<div class="content">
					<p class="subtitle">Stock: {stock}</p>
					<p>{description}</p>
				</div>
			</div>	
		</div>
	);
};
Itemi.propTypes = {
	itemi: PropTypes.object.isRequired
};
export default Itemi;