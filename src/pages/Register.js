import { useState,useEffect, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom'; 
import { Form, Button, Container, Collapse } from 'react-bootstrap';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';




export default function Register() {

	const [open, setOpen] = useState(false);


	const {user} = useContext(UserContext);

	const history = useHistory();

	// State hooks to store the values of the input fields
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastname] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	// State to determine whether submit button is enable oor not
	const [isActive, setIsActive] = useState(false);

	// Check if value are successfully binded
	console.log(firstName);
	console.log(lastName);
	console.log(age);
	console.log(gender);
	console.log(mobileNo);
	console.log(email);
	console.log(password1);
	console.log(password2);
	

	const registerUser = (e) => {

			e.preventDefault();

			fetch('https://murmuring-meadow-05679.herokuapp.com/api/users/checkEmail', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email
				})
				
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				if(data === true){
					Swal.fire({
						title: "Duplicate email found!",
						icon: "error",
						text: "Please provide a different email."
					})
				}
				else{
					fetch('https://murmuring-meadow-05679.herokuapp.com/api/users/register', {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							firstName: firstName,
							lastName: lastName,
							age: age,
							gender: gender,
							email: email,
							password: password1,
							mobileNo: mobileNo
							
						})
						
					})
					.then(res => res.json())
					.then(data => {
						console.log(data);
		
						if(data === true){
							Swal.fire({
								position: "center",
								title: "Registration successful",
								icon: "success",
								text: "Welcome to ShoeShop!.",
								showConfirmButton: false,
								timer: 1500
								
							})
							setFirstname('');
							setLastname('');
							setAge('');
							setGender('');
							setMobileNo('');
							setEmail('');
							setPassword1('');
							setPassword2('');
							history.push("/login")
						}
						else{
							Swal.fire({
								title: "Ops! something went wrong",
								icon: "error",
								text: "Please try again."
							})
						}
					})
				}
			})
		}



	useEffect(() => {
		// Validation to enable the submit button when all fields are populated and both  passwords match
		if((firstName !== '' && lastName !== '' && age !== '' && gender !== '' && email !== '' && password1 !== '' && password2 !== '') && (password1 === password2) && (mobileNo.length === 11)){
			setIsActive(true);
		}
		else {
			setIsActive(false);
		}

	}, [firstName, lastName, age, gender, mobileNo, email, password1, password2])

	return (

		(user.id !== null) ?
			<Redirect to="./product" />
		:	

		<Container className="mb-5 mt-3">
			<div className="register">
				<h1>Register</h1>

				{/* Firstname */}
				  <Form.Group className="mb-3" controlId="userEmail">
				    <Form.Label>First Name</Form.Label>
				    <Form.Control 
				    	type="text" 
				    	placeholder="Enter First Name" 
				    	value= {firstName}
				    	onChange= { e => setFirstname(e.target.value) }
				    	required 
				    />
				  </Form.Group>

				{/* Lastname */}
				    <Form.Group className="mb-3" controlId="userEmail">
				      <Form.Label>Last Name</Form.Label>
				      <Form.Control 
				      	type="text" 
				      	placeholder="Enter Last Name" 
				      	value= {lastName}
				      	onChange= { e => setLastname(e.target.value) }
				      	required 
				      />
				    </Form.Group>

				{/* Age */}
				    <Form.Group className="mb-3" controlId="userEmail">
				      <Form.Label>Age</Form.Label>
				      <Form.Control 
				      	type="number" 
				      	placeholder="Enter Age" 
				      	value= {age}
				      	onChange= { e => setAge(e.target.value) }
				      	required 
				      />
				    </Form.Group>

				{/* Gender */}
				    <Form.Group className="mb-3" controlId="userEmail">
				      <Form.Label>Gender</Form.Label>
				      <Form.Select
				      		type="text" 
				      		placeholder="Select Gender" 
				      		value = {gender}
				      		onChange = { e => setGender(e.target.value)}
				      		required>

				      		<option value="">Select Gender</option>
				      		<option value="Male">Male</option>
				      		<option value="Female">Female</option>
				      		<option value="Other">Other</option>
				      		</Form.Select>
				      </Form.Group>

				{/* Mobile Number */}
				    <Form.Group className="mb-3" controlId="userEmail">
				      <Form.Label>Mobile Number</Form.Label>
				      <Form.Control 
				      	type="text" 
				      	placeholder="Enter Mobile Number" 
				      	value= {mobileNo}
				      	onChange= { e => setMobileNo(e.target.value) }
				      	required 
				      />
				    </Form.Group>

				{/* Email */}
				<Form onSubmit={(e) => registerUser(e)}>
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

				{/* Password */}
				  <Form.Group className="mb-3" controlId="password1">
				    <Form.Label>Password</Form.Label>
				    <Form.Control 
				    	type="password" 
				    	placeholder="Password" 
				    	value= {password1}
				    	onChange= { e => setPassword1(e.target.value)}
				    	required 
				    />
				  </Form.Group>

				{/* Verify Password */}
				  <Form.Group className="mb-3" controlId="password2">
				    <Form.Label>Verify Password</Form.Label>
				    <Form.Control 
				    	type="password" 
				    	placeholder="Verify Password" 
				    	value= {password2}
				    	onChange= { e => setPassword2(e.target.value)}
				    	required 
				    />
				  </Form.Group>
				  
				 {/* Conditionally rnder submit button based on isActive state*/}
				  { isActive ?
				  		<Button variant="dark" type="submit" id="submitBtn">
				  		  Submit
				  		</Button>
				  	:
				  		<Button variant="dark" type="submit" id="submitBtn" disabled>
				  		  Submit
				  		</Button>
				   }
				  
				</Form>
			</div>
		</Container>
	)
}

