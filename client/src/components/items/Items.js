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

    if ( items == null || items.length === 0 ){
        return <h4>Please add a item</h4>;
	}
	return (
		<Fragment>
			<div className="tile is-ancestor">
				{ items.map( item => ( 
					<div className="tile is-4">
						<Item key={"item"+item.id} item={item} />
					</div>
				) ) }
			</div>
		</Fragment>
	);
};
export default Items;