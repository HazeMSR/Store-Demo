import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Notification from './Notification';


const Login = props => {
    const authContext = useContext(AuthContext);

    const { login, error, clearErrors, isAuthenticated } = authContext;
	const type = 'is-danger';
	let content = 'Some';

    useEffect( () => {
        if(isAuthenticated) {
            props.history.push('/');
        }
        if(error === 'Invalid Credentials') {
            
            console.log('ERROR AUTH: ',error);
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [users, setUsers] = useState({
        user: '',
        password: ''
    });


    const { user, password } = users;

    const onChange = e => setUsers({
        ...users,
        [e.target.name] : e.target.value
    });

    const onSubmit = e =>{
        e.preventDefault();
        if( user === '' || password === '') {
		   	content = 'Please fill in all fields';
            console.log('INPUT SOME USER');
        } else {
            login({
                user,
                password
            });
        }
    };
	return (
		<form onSubmit={onSubmit}>
			<Notification type={type} content={content} />
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">User:</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
							<input 
								className="input is-large"
								type="text"
								placeholder="User"
								name="user"
								value={user}
								onChange={onChange}
								required 
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-user" />
			       			</span>
			     		</p>
			   		</div>
				</div>
			</div>
            <div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Password:</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
							<input 
								className="input is-large"
								type="password"
								placeholder="******"
								name="password"
								value={password}
								onChange={onChange}
								required 
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-unlock" />
			       			</span>
			     		</p>
			   		</div>
				</div>
			</div>
            <div className="field is-grouped is-grouped-centered">
                <div className="is-control">
                    <input type="submit" className="button is-danger" value="Login" />
                </div>
            </div>

		</form>
	);
};
export default Login;
