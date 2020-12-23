import React, { Fragment, useState } from 'react';
import AddItemModal from './AddItemModal';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const onClick = e => {
		setOpen(true);
	};

	return (
	<Fragment>
		<nav className="navbar is-warning">
  			<div id="navbarBasicExample" className="navbar-menu">
			  <div className="navbar-brand">
			  	<div className="navbar-item"><i className="fab fa-shopify" style={iconStyle}></i></div>
				<a className="navbar-item" href="/" style={nameStyle}>Hazel's Store</a>
			  </div>
    			<div className="navbar-start">
					<a className="navbar-item" onClick={onClick}>
						<i className="fas fa-plus"/>
    	    			Add item
    	  			</a>
				</div>
			</div>
		</nav>
		{ open && (<AddItemModal isActive="modal is-active"/>)}
	</Fragment>

	);
};
const iconStyle = {
	fontSize: "3em"
};
const nameStyle = { 
	fontSize: "1.8em"
};
export default Navbar;