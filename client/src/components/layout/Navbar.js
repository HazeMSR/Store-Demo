
import ModalContext from '../../context/modal/modalContext';
import ItemContext from '../../context/item/itemContext';
import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
	const modalContext = useContext(ModalContext);
	const itemContext = useContext(ItemContext);
	const { setType, openModal } = modalContext;
	
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

	const open = e => {
		itemContext.clearCurrent();
		setType(0);
		openModal();
	};

    const onLogout = () => {
        logout();
    };
    
    const authLinks = (
        <Fragment>
			<div className="navbar-item">
				<i className='fas fa-user' />
				{' '} Hello { user && user.user }
			</div>
			
			<a className="navbar-item" onClick={open} href="#modal">
				<i className="fas fa-plus"/>
				  {' '} Add item
			</a>
            <a className="navbar-item" onClick={onLogout} href='#!'>
                <i className='fas fa-sign-out-alt' />
                Logout
            </a>
        </Fragment>
    );


    return (
	<nav className="navbar is-warning">
		<div id="navbarBasicExample" className="navbar-menu">
		<div className="navbar-brand">
			<div className="navbar-item"><i className="fab fa-shopify" style={iconStyle}></i></div>
		  <a className="navbar-item" href="/" style={nameStyle}>Hazel's Store</a>
		</div>
		  <div className="navbar-start">
			{isAuthenticated && authLinks}
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