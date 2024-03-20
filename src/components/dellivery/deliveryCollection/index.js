import React from 'react'
import'./deliverCollection.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem';


const deliveryItems=[
  {
  id:1,
  title:'Pizza',

  // https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png
  cover:"  https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },


  // "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"

  
  {
    id:2,
    title:'Thali',
    cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
      id:3,
      title:'Cake',
      cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      },
      {
        id:4,
        title:'Burger',
        cover: " https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        },
        {
          id:5,
          title:'Biriyani',
          cover:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
          },
          {
            id:6,
            title:'Biriyani',
            cover:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
            },
            {
              id:7,
              title:'Biriyani',
              cover:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
              },
              {
                id:8,
                title:'Biriyani',
                cover:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
                },
        
      
  
  


];






const settings = {
  
  infinite:false,
  slidesToShow: 5,
  slidesToScroll: 1,
   nextArrow: <NextArrow/>,
   prevArrow: <PrevArrow/>
};

const DeliveryCollection = () => {
  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'   style={{marginLeft:'-10px'}}>Eat's what makes you happy</div>
        { <Slider {...settings}>
          {deliveryItems.map((item)=>{

            return <DeliveryItem item={item}/>;
          })}
          </Slider> }


      </div>
      
    </div>
  )
}

export default DeliveryCollection

