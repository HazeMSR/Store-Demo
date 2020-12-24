import React, { useContext, useState } from 'react';
import ItemContext from '../../context/item/itemContext';

const Alert = props => {
	const itemContext = useContext(ItemContext);
	const { current, setCurrent, deleteItem } = itemContext;
	const [display, setDisplay] = useState(props.active);

	const onAccept = () => {
		deleteItem(current.id);
		setDisplay('card is-hidden');
	};

	const onCancel = () => {
		setCurrent(null);
		setDisplay('card is-hidden');
	};

 	return (
		<div className={display}>
			<header className="card-header">
			  	<p className="card-header-title">
			    	Delete Item
			  	</p>
			  	<button href="#" className="delete" aria-label="close" onClick={onCancel}></button>
			</header>
			<div className="card-content">
				{current && (<div className="content">
			    	Do you really want to erase {current.name} with ID: {current.id} ?
			  	</div>)}

			</div>
			<footer className="card-footer">
			  	<a href="#" className="card-footer-item" onClick={onAccept}>Accept</a>
			  	<a href="#" className="card-footer-item" onClick={onCancel}>Cancel</a>
			</footer>
		</div>
	);
};

export default Alert;
