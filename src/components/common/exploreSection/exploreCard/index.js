import React from 'react'
import'./exploreCard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from  '@fortawesome/free-solid-svg-icons'


const ExploreCard = ({restaurant}) => {
  const name= restaurant?.info?.name ??"";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime=restaurant?.order?.deliveryTime;
  const rating= restaurant?.info?.rating?.rating_text;
  const approxPrice= restaurant?.info?.cfo?.text;
  const offers=restaurant?.bulkOffers ??[];
  const cuisines =restaurant?.info?.cuisine?.map((item)=>item.name).slice(0,3);

  // const bottomContainers=restaurant?.bottomContainers;
  // const goldOff=restaurant?.gold?.text;
  // const proOff= offers.length > 1 ?offers[0].text : null;
  const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

    
  return (
    <div className='explore-card cur-po'>
      <div className='explore-card-cover'>
      <img src={coverImg} alt={name} className='explore-card-image'/>
      <div className='delivery-time'>{deliveryTime}</div>
      {/* {proOff && <div className='pro-off'>{proOff}</div>} */}
      {/* {goldOff && <div className='gold-off absolut-center'>{goldOff}</div>} */}
      {discount && <div className='discount absolute-center'>{discount}</div>}
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        
        {rating && (  
          
         <div className='res-rating absolute-center'>
          {rating} < FontAwesomeIcon icon={faStar} />
        </div>
        )}
        
         
        </div>
        <div className='res-row'>
          {cuisines.length && (
            <div className='res-cuisine'>
            
             {cuisines.map((item,i)=>{

              return(
              
              <span className='=res-cuisine-tag'>{item} {i!==cuisines.length-1 && ","}</span>
              );
             })}
            
             </div>


            
  )}
  {approxPrice&& <div className='approx-price'>{approxPrice}</div>}

        </div>

        
    </div>
  )
}

export default ExploreCard
