import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import ItemContext from '../../context/item/itemContext';
import ModalContext from '../../context/modal/modalContext';

import DeleteItem from '../items/DeleteItem';

const Item = ({ item }) => {
	const { name, price, stock, description, image } = item;

	const itemContext = useContext(ItemContext);
	const modalContext = useContext(ModalContext);
	const { openModal } = modalContext;

	const [ active, setActive ] = useState(false);

	const onEdit = e => {
		itemContext.setCurrent(item);
		openModal();
	};
	const onDelete = e => {
		itemContext.setCurrent(item);
		setActive('card');
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
					onClick={onEdit}>Edit</a>
				<a className="card-footer-item is-danger" onClick={onDelete}>Delete</a>
  			</footer>
			{active && (<DeleteItem active={active}/>)}
		</div>
	);
};
Item.propTypes = {
	item: PropTypes.object.isRequired
};
export default Item;