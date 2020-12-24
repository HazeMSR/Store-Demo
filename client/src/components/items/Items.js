import React, { useEffect, Fragment, useContext } from 'react';
import Item from './Item';
import ItemContext from '../../context/item/itemContext';
import ModalContext from '../../context/modal/modalContext';
import Modal from '../layout/Modal';

const Items = () => {
	const itemContext = useContext(ItemContext);
	const { items, getItems } = itemContext;

	const modalContext = useContext(ModalContext);
	const { isActive } = modalContext;

	useEffect( () => {
		console.log('Entro useEffect Items');
		getItems();
		// eslint-disable-next-line 
	},[]);

	console.log('Entro Items');
	
	if ( items == null || items.length === 0 ){
        return <h4>Please add an item</h4>;
	}
	return (
		<Fragment>
			<div className="tile is-ancestor">
				{ items.map( item => ( 
					<div className="tile is-3">
						<Item key={item.id} item={item} />
					</div>
				) ) }
			</div>
			<Modal />
			
		</Fragment>
	);
};
export default Items;