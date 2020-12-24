import React from 'react';

const FindItem = () => {
	return (	
		<div className="field has-addons">
		  	<div className="control">
		  	  	<input className="input" type="text" placeholder="Find a Item" />
		  	</div>
		  	<div className="control">
		  	  	<button className="button is-info">
			  	    Search
		  	  	</button>
		  	</div>
		</div>
		
	);
};
export default FindItem;