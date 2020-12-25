import React, { useContext } from "react";
import ModalContext from '../../context/modal/modalContext';
import ItemContext from '../../context/item/itemContext';

const Navbar = () => {
	const modalContext = useContext(ModalContext);
	const itemContext = useContext(ItemContext);
	const { setType, openModal } = modalContext;
	
	const open = e => {
		itemContext.clearCurrent();
		setType(0);
		openModal();
	};

	return (
	<nav className="navbar is-warning">
  		<div id="navbarBasicExample" className="navbar-menu">
		  <div className="navbar-brand">
		  	<div className="navbar-item"><i className="fab fa-shopify" style={iconStyle}></i></div>
			<a className="navbar-item" href="/" style={nameStyle}>Hazel's Store</a>
		  </div>
    		<div className="navbar-start">
				<a className="navbar-item" onClick={open} href="#modal">
					<i className="fas fa-plus"/>
        			Add item
      			</a>
			</div>
		</div>
	</nav>
	);
};
const iconStyle = {
	fontSize: "3em"
};
const nameStyle = { 
	fontSize: "1.8em"
};
export default Navbar;