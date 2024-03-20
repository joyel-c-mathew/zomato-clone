import React from 'react'
import'./delivery.css'
import Filter from '../common/filter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSliders,faArrowsUpDown} from  '@fortawesome/free-solid-svg-icons'
import DeliveryCollection from './deliveryCollection'
import TopBrands from './topBrands'
import ExploreSection from '../common/exploreSection'
import { restaurants } from '../../data/resturants'



const deliveryFilters=[
{
  id:1,
  icon:<FontAwesomeIcon  style={{marginTop:'0.3rem' ,marginLeft:''}}icon={faSliders}/>,
  title:'Filters'
},

{
id:2,
title:'Rating:4.0 +',
},

{
  id:3 ,
  title:'Safe and Hygenic',
  },

  {
    id:4 ,
    title:'Pure veg',
    },

    {
      id:5 ,
      title:'Delivery Time',
      icon:<  FontAwesomeIcon  style={{marginTop:'0.3rem',marginLeft:''}}icon={faArrowsUpDown}/> ,
      },

      {
        id:6 ,
        title:'Great Offers',
        },
      


];
const restaurantList=restaurants;

const Delivery = () => {
  return (
    <div className=''>

      <div className='max-width'>
      <Filter filterList={deliveryFilters}/>
      </div>
      <DeliveryCollection/>
      <TopBrands/>
      <div></div>
      <ExploreSection list={restaurantList }  className="rest" style={{marginLeft:'10rem'}}  collectionName='Delivery resturants in banglore' />  
      

      
    </div>
  )
}

export default Delivery
