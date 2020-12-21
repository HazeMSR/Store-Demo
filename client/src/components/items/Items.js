import React, { useEffect, Fragment, useContext } from 'react';
import Itemi from './Itemi';
import ItemContext, {Loquesea} from '../../context/item/itemContext';

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
		<div>
			{ items.forEach( item => (
                <Itemi key={"item"+item._id} itemi={item} />
			) ) }
		</div>
	);
};
export default Items;