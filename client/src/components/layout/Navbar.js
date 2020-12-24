import React, { useContext } from "react";
import ModalContext from '../../context/modal/modalContext';

const Navbar = () => {
	const modalContext = useContext(ModalContext);
	const open = e => {
		modalContext.openModal();
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
        			{' '}Add item
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