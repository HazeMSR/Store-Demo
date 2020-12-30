import React, { Fragment, useContext, useEffect } from 'react';
import Items from '../components/items/Items';
import AuthContext from '../context/auth/authContext';

const Home = props => {
	const authContext = useContext(AuthContext);

	useEffect( () => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	console.log('Entro HOME');
	return (
		<Fragment>
			<Items />		
		</Fragment>
	);
};
export default Home;
