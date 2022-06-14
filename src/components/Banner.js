//import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import  { Button }  from './Button'
import '../App.css'
import './Banner.css'


//import Container from 'react-bootstrap/Nav';



export default function Banner() {
	return (

		<div className='banner-container'>
		      <video src='/videos/video-3.mp4' autoPlay loop muted />
		      <h1>WELCOME TO SHOESHOP</h1>
		      {/*<p>Shop Now!</p>*/}
		      <div className='banner-btns'>
		        <Button
		          className='btns'
		          buttonStyle='btn--outline'
		          buttonSize='btn--large'
		          
		        >
		          SHOP NOW
		        </Button>
		        {/*<Button
		          className='btns'
		          buttonStyle='btn--primary'
		          buttonSize='btn--large'
		          onClick={console.log('hey')}
		        >
		          WATCH TRAILER <i className='far fa-play-circle' />
		        </Button>*/}
		      </div>
		    </div>
		
	)
} 


// <Carousel id="carousel" className="p-5 mb-5" variant="dark">
//   <Carousel.Item>
//     <img
//       className="img-carousel d-block w-100"
//       src="https://picsum.photos/100/100?img=1"
//       alt="First slide"
//     />
//     <Carousel.Caption id="carousel">
//       <h5>First slide label</h5>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item id="carousel">
//     <img
//       className="img-carousel d-block w-100"
//       src="https://picsum.photos/100/100?img=2"
//       alt="Second slide"
//     />
//     <Carousel.Caption id="carousel">
//       <h5>Second slide label</h5>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item id="carousel">
//     <img
//       className="img-carousel d-block w-100"
//       src="https://picsum.photos/100/100?img=3"
//       alt="Third slide"
//     />
//     <Carousel.Caption id="carousel">
//       <h5>Third slide label</h5>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>