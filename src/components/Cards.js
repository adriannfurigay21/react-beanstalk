import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>OUR PRODUCTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Basketball shoes are specifically designed for the intensity of the game.'
              label='Basketball'
              path='/product'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Casual shoes are characterized by sturdy leather uppers, non-leather outsoles, and wide profile.'
              label='Casual'
              path='/product'
            />
          </ul>

          {/*<h1 className="p-5">Trending</h1>*/}
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Running shoes are designed to protect your feet from the road, provided traction on different surfaces.'
              label='Running'
              path='/product'
            />
            <CardItem
              src='images/img-13.jpg'
              text='A climbing shoe is a specialized type of footwear designed for rock climbing.'
              label='Climbing '
              path='/product'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Designed for grass pitches have studs on the outsole to aid grip.'
              label='Soccer'
              path='/product'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;