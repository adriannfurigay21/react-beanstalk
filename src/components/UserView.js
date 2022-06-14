import React, { useState, useEffect } from 'react'
import ProductCard from "./ProductCard";
import { Container } from 'react-bootstrap';

export default function UserView({productsData}) {

		const [products, setProducts] = useState([]);

	    useEffect(() => {
	        
	        // Map through the products received from the parent component (product page) to render the course cards
	        const productsArr = productsData.map(product => {
	            // Returns active courses as "CourseCard" components
	        	if(product.isActive === true){
					return (
						<ProductCard productProp={product} key={product._id}/>
					)
	        	}else{
	        		return null;
	        	}
	        });

	        // Set the "courses" state with the course card components returned by the map method
	        // Allows the course card components to be rendered in this "UserView" component via the return statement below
	        setProducts(productsArr);

	    }, [productsData]);

	    return(
	        <Container>
	            {products}
	        </Container>
	    );	
}