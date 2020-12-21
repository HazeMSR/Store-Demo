import React from "react";

const Navbar = () => {
	return (
	<nav className="navbar is-warning">
  		<div id="navbarBasicExample" className="navbar-menu">
		  <div className="navbar-brand">
		  	<div className="navbar-item"><i className="fab fa-shopify" style={iconStyle}></i></div>
			<a className="navbar-item" href="/" style={nameStyle}>Hazel's Store</a>
		  </div>
    		<div className="navbar-start">
				<a className="navbar-item" href="/add">
        			Add item
      			</a>
				<a className="navbar-item" href="/find">
        			Find item
      			</a>
				<a className="navbar-item" href="/modify">
        			Modify item
      			</a>
				<a className="navbar-item" href="/delete">
        			Delete item
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