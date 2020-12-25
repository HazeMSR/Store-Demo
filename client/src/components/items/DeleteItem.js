import React, { useContext, Fragment } from 'react';
import ItemContext from '../../context/item/itemContext';

const DeleteItem = () => {
	const { current } = useContext(ItemContext);
 	return (
		<Fragment >
			<div className="card-content">
				{current && (<div className="content">
			    	Do you really want to erase {current.name} with ID: {current.id} ?
			  	</div>)}
			</div>
		</Fragment>
	);
};

export default DeleteItem;