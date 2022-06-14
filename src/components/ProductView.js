import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useHistory, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function ProductView() {

	const { user } = useContext(UserContext);

	const history = useHistory();

	// The useParams hook allows us to retreive the courseId passed via URL
	const { productId } = useParams();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	
	// Enroll function to enroll a user to a specific course
	const buy = (productId) => {

		fetch('https://murmuring-meadow-05679.herokuapp.com/api/users/buy', {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${ localStorage.getItem('token') }`
					},
					body: JSON.stringify({
						productId: productId
					})
			})

			.then(res => res.json())
			.then(data => {
				console.log(data);

				if(data === true){
					Swal.fire({
						title: "Successful transaction",
						icon: "success",
						text: "Thank you!"
					})
					history.push("/product");
				}
				else {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "Please try again."
					})
				}
			})
		
	}

	// The useEffect hook is used to check if the courseId is retreive properly.
	useEffect(() => {
		console.log(productId);

		fetch(`https://murmuring-meadow-05679.herokuapp.com/api/products/${productId}`)
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
		})

	}, [productId]);

	return(
		<Container className="mt-5">
			<Row >
				<Col lg={{ span: 6, offset: 3 }}>
					<Card className="product-view mb-2">
					    <Card.Body className="text-center">
					        <Card.Title>{name}</Card.Title>
					        <Card.Subtitle>Description:</Card.Subtitle>
					        <Card.Text>{description}</Card.Text>
					        <Card.Subtitle>Price:</Card.Subtitle>
					        <Card.Text>&#8369; {price}</Card.Text>
					        {
					        	// If the user is not log in when viewing the courses. redirect the user to login page
					        	user.id !== null ?
					        		<Button variant="dark" onClick={() => buy(productId)} >Buy</Button>
					        	:
					        		<Link className="btn btn-danger btn-block" to="/login">Login to Buy</Link>
					        }
					        
					    </Card.Body>
					</Card> 
				</Col>
			</Row>
		</Container>
	)
}




	















