import { Fragment, useEffect, useState, useContext} from 'react';
import { Container } from 'react-bootstrap';
//import ProductCard from '../components/ProductCard';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
import UserContext from '../UserContext'



export default function Products () {

	const { user } = useContext(UserContext);

	const [products, setProduct] = useState ([])

	const fetchData = () => {
		fetch('https://murmuring-meadow-05679.herokuapp.com/api/products/all')
		.then(res => res.json())
		.then(data => {
			console.log(data);

			
			setProduct(data);
		});
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>		
			{(user.isAdmin === true)
				? <AdminView productsData={products} fetchData={fetchData}/>
				:<UserView productsData={products}/>
			}	
		</>
	)
}