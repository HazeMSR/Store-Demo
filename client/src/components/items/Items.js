import React, { useEffect, Fragment, useContext } from 'react';
import Item from './Item';
import ItemContext from '../../context/item/itemContext';

const Items = () => {
	const itemContext = useContext(ItemContext);
	const { items, getItems } = itemContext;

	useEffect( () => {
		getItems();
		// eslint-disable-next-line 
	},[]);
	
	if ( items == null || items.length < 1 ){
        return <h4>Please add an item</h4>;
	}
	return (
		<Fragment>
			<div className="tile is-ancestor">
				{ items.map( item => ( 
					//<div className="tile is-3">
						<Item key={item.id} item={item} />
					//</div>
				) ) }
			</div>
			
		</Fragment>
	);
};
export default Items;