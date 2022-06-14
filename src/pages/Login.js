import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import '../components/Button.css'

export default function Login(props) {

	//Allows to consume the User context object and it's propertes for user validation.
	const {user, setUser} = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isActive, setIsActive] = useState(true);

	console.log(email);
	console.log(password);

	function loginUser(e) {
		e.preventDefault();

		// Process a fetch request to the corresponding backend API 
		/*
			Syntax: 
				fetch('url', {options})
				.then(res => res.json())
				.then(data => {})
		*/
		fetch('https://murmuring-meadow-05679.herokuapp.com/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data.accessToken)

			if(typeof data.accessToken !== "undefined"){
				localStorage.setItem('token', data.accessToken)
				retrieveUserDetails(data.accessToken);

				Swal.fire({
					position: "center",
					title: "Login Successful",
					icon: "success",
					text: "Welcome to ShoeShop!",
					showConfirmButton: false,
					timer: 1500
				})
			}
			else {
				Swal.fire({
					title: "Authentication failed",
					icon: "error",
					text: "Check your login details and try again."
				})
			}
		})

		// Set the email of the authenticated user in the local storage

		/*
			Syntax:
			localStorage.setItem('propertyName', value)
		*/

		// localStorage.setItem('email', email);

		// Set the global user state to have properties obtaines from local storage
		// setUser({
		// 	email: localStorage.getItem('email')
		// });

		setEmail('');
		setPassword('');

		console.log(`${email} has been verified! welcome back!`)
	}

	const retrieveUserDetails = (token) => {
		fetch('https://murmuring-meadow-05679.herokuapp.com/api/users/details', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
		})
	}

	useEffect(() => {
		if(email !== '' && password !== ''){
			setIsActive(true);
		}
		else {
			setIsActive(false);
		}
	},[email, password])


	return (
		(user.id !== null) ?
			<Redirect to="/product" />
		:
		<Container className="mt-5 mb-5">
			<div className="login">	
				<h1>Login</h1>
				<Form className="pt-2" onSubmit={(e) => loginUser(e)}>
				  <Form.Group className="mb-3" controlId="userEmail">
				    <Form.Label>Email address</Form.Label>
				    <Form.Control 
				    	type="email" 
				    	placeholder="Enter email" 
				    	value= {email}
				    	onChange= {(e) => setEmail(e.target.value) }
				    	required 
				    />
				    <Form.Text className="text-muted">
				      We'll never share your email with anyone else.
				    </Form.Text>
				  </Form.Group>

				  <Form.Group className="mb-3" controlId="password">
				    <Form.Label>Password</Form.Label>
				    <Form.Control 
				    	type="password" 
				    	placeholder="Password" 
				    	value= {password}
				    	onChange= {(e) => setPassword(e.target.value)}
				    	required 
				    />
				  </Form.Group>

				  { isActive ?
				  		<Button variant="dark" type="submit" id="submitBtn">
				  		  Login
				  		</Button>
				  	:
				  		<Button variant="dark" type="submit" id="submitBtn" disabled>
				  		  Login
				  		</Button>
				   }

				</Form>
			</div>	
		</Container>
	
	)

}



/*import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
 
export default function Login(props) {

	const {user, setUser} = UserContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isActive, setIsActive] = useState(true);

	console.log(email);
	console.log(password);

	function loginUser(e) {
		e.preventDefault()


		fetch('https://localhost:4000/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data.accessTOken)

			if(typeof data.accessTOken !== "undefined"){
				localStorage.setItem('token', data.accessTOken)
				retrieveUserDetails(data.accessTOken);

				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome to ShoeShop!"
				})
			}
			else {
				Swal.fire({
					title: "Authentication failed",
					icon: "error",
					text: "Check your login details and try again."
				})
			}
		})

		setEmail('');
		setPassword('');
		console.log(`${email} has been verified! welcome back!`)
	}


	const retrieveUserDetails = (token) => {
		fetch('http://localhost:4000/api/users/details', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
		})
	}

	useEffect(() => {
		if(email !== '' && password !== '') {
			setIsActive(true);
		}
		else {
			setIsActive(false);
		}
	},[email, password])

	return (

		<Container className="mt-5">
			<di>

				<h1>Login</h1>
				<Form className="pt-2" onSubmit={(e) => loginUser(e)}>
				  <Form.Group className="mb-3" controlId="userEmail">
				    <Form.Label>Email address</Form.Label>
				    <Form.Control 
				    	type="email" 
				    	placeholder="Enter email" 
				    	value= {email}
				    	onChange= { e => setEmail(e.target.value) }
				    	required 
				    />
				    <Form.Text className="text-muted">
				      We'll never share your email with anyone else.
				    </Form.Text>
				  </Form.Group>

				  <Form.Group className="mb-3" controlId="password">
				    <Form.Label>Password</Form.Label>
				    <Form.Control 
				    	type="password" 
				    	placeholder="Password" 
				    	value= {password}
				    	onChange= { e => setPassword(e.target.value)}
				    	required 
				    />
				  </Form.Group>
				  { isActive ?
				  		<Button variant="success" type="submit" id="submitBtn">
				  		  Login
				  		</Button>
				  	:
				  		<Button variant="success" type="submit" id="submitBtn" disabled>
				  		  Login
				  		</Button>
				   }
				  	
			

				</Form>
			
		</Container>
	)
}
*/