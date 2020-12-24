import React, { useContext } from 'react';
import ItemContext from '../../context/item/itemContext';

const Alert = () => {
	const itemContext = useContext(ItemContext);
	const { current, setCurrent, deleteItem } = itemContext;

	const onAccept = () => {
		deleteItem(current.id);
		setCurrent(null);
	};

	const onCancel = () => {
		setCurrent(null);
	};

 	return (
		<div className='card'>
			<header className="card-header">
			  	<p className="card-header-title">
			    	Delete Item
			  	</p>
			  	<button href="#" className="delete" aria-label="close" onClick={onCancel}></button>
			</header>
			<div className="card-content">
				<div className="content">
			    	Do you really want to erase {current.name} with ID: {current.id} ?
			  	</div>

			</div>
			<footer className="card-footer">
			  	<a href="#" className="card-footer-item" onClick={onAccept}>Accept</a>
			</footer>
		</div>
	);
};

export default Alert;
