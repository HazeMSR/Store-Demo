import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import ItemContext from '../../context/item/itemContext';
import ModalContext from '../../context/modal/modalContext';

const Item = ({ item }) => {
	const { name, price, stock, description, image } = item;

	const itemContext = useContext(ItemContext);
	const modalContext = useContext(ModalContext);
	const { openModal, setType } = modalContext;

	const openM = type => {
		itemContext.setCurrent(item);
		setType(type);
		openModal();
	};

	return (
		<div className="card">
		  	<div className="card-image">
		    	<figure className="image">
		      		<img src={image} alt="Placeholder" width="20em" height="20em" />
		    	</figure>
		  	</div>
			<div className="card-content">
				<div className="media">
				    <div className="media-left">
				    	<figure className="image is-48x48">
				          <img src={image} alt="Placeholder" />
				        </figure>
				    </div>
				    <div className="media-content">
				    	<p className="title is-4">{name}</p>
				        <p className="subtitle is-6"> ${price}</p>
				    </div>
				</div>
				<div className="content">
					<p className="subtitle">Stock: {stock}</p>
					<p>{description}</p>
				</div>
			</div>
			<footer className="card-footer">
				<a 
					href="#modal" 
					className="card-footer-item is-primary" 
					onClick={openM(0)}>Edit</a>
				<a 
					href="#modal"
					className="card-footer-item is-danger" 
					onClick={openM(1)}>Delete</a>
  			</footer>
		</div>
	);
};
Item.propTypes = {
	item: PropTypes.object.isRequired
};
export default Item;