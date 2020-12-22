import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemContext from '../../context/item/itemContext';

const Item = ({ item }) => {
	console.log("ITEM ",item);
	const itemContext = useContext(ItemContext);
    //const { deleteItem, setCurrent, clearCurrent } = itemContext;
	const { name, price, stock, description, image } = item;
	
	return (
		<div class="card">
		  	<div class="card-image">
		    	<figure class="image">
		      		<img src={image} alt="Placeholder" width="20em" height="20em"	/>
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
			<footer className="card-footer">
    			<a href="#" className="card-footer-item is-primary">Edit</a>
    			<a href="#" className="card-footer-item is-danger">Delete</a>
  			</footer>
		</div>
	);
};
Item.propTypes = {
	item: PropTypes.object.isRequired
};
export default Item;