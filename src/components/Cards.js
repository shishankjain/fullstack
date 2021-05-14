import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our happy clients!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='http://bsmedia.business-standard.com/_media/bs/img/article/2015-05/21/full/1432213622-2374.gif'
              text='Jewellery takes people minds out of wrinkles. I have always thought of jewellery as an exclamation point of a woman outfit.'
              path=''
            />
            <CardItem
              src='https://www.adgully.com/img/800/201905/capture5.jpg'
              text='Jewellery has the power of being that one little thing that makes you feel unique.'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://imagevars.gulfnews.com/2019/04/23/Gold_rush_2_16a4a6e4fd3_large.jpg'
              text='You feel happy when you buy something new and jewellery and beads have been the Indian culture.'
              label='Happy Customers'
              path=''
             />
            <CardItem
              src='https://im.hunt.in/cg/Sujangarh/City-Guide/jewelry-stores-sujangarh.JPG'
              text='A woman beauty adds upto 100 times as she puts up Indian jewels and accessories.'
              label='Happy Customers'
              path=''
            />
            <CardItem
              src='https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/pure-gold-dubai-16119-min.jpg'
              text='A cave full of happiness and arts. Blessed to visit at this prestige showroom.'
              label='Happy Customers'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
