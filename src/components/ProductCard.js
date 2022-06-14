import { useContext } from 'react'
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductCard.css';

import CartContext from './context/cart/CartContext'



export default function ProductCard({productProp}) {

	const { addToCart } = useContext(CartContext)

	const {_id, name, description, price} = productProp;

	return(
	 

		<div className="productCard__wrapper">
			<div>
				<img className="productCard__img container-fluid" src="images/img-10.jpg"/>
				<h4>{name}</h4>
				<div className="Product__price">
					<h5>₱ {price}</h5>
				</div>
				<Link className="btn btn-dark m-2" to={`/product/${_id}`}>Buy</Link>
				<Link className="btn btn-dark m-2" onClick={() => addToCart(productProp)}>Add to Cart</Link>
			</div>	
		</div>	

	)
}




/*<div className="product pt-3 mb-3">
	<Card className="product-card mb-2">
		<Card.Body>
		<Card.Img className="card-img" src="images/img-10.jpg" height="500" width="300"/>
			<Card.Title>{name}</Card.Title>
			<Card.Subtitle>Description:</Card.Subtitle>
			<Card.Text>{description}</Card.Text>
			<Card.Subtitle>Price:</Card.Subtitle>
			<Card.Text>&#8369; {price}</Card.Text>		        
			<Link className="btn btn-dark m-2" to={`/product/${_id}`}>Buy</Link>
			<Link className="btn btn-dark m-2" to={`/cart/${_id}`}>Add to Cart</Link>
		</Card.Body>
	</Card> 
</div>*/

