import '../App.css'
import { Fragment } from 'react';

/* Components */
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer'


export default function Home() {
	return (
		<Fragment>
			<Banner />
			<Cards />
			<Footer />
		</Fragment>
	)
}
