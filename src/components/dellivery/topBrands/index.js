import React from 'react'
import './topBrands.css'
import Slider from 'react-slick';


const topBrandList = [
    {
        id: 1,
        brand:'mc donalds',
        time: ' 13min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png "
    },

    {
        id: 2,
        time: '28min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807172.png?output-format=webp "
    },

    {
        id: 3,
        time: '19min',
        cover: " https://b.zmtcdn.com/data/brand_creatives/logos/3bd971b1a5783e208a9782c3604fa9f3_1601885754.png?output-format=webp"
    },

    {
        id: 4,
        time: '20min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/58d8e6b39493bfb7ed966deca3d7a0a2_1701249294.png?output-format=webp "
    },
    {
        id: 5,
        time: '35min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589431950.png?output-format=webp"
    },

]


const settings = {
  
    infinite:false,
    slidesToShow: 5,
    slidesToScroll: 1,
   //nextArrow: <NextArrow/>,
   //prevArrow: <PrevArrow/>
  };
  

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className="collection-title " style={{marginLeft:'-19px'}}>Top brands for you</div>
            <Slider  {...settings}>
                {topBrandList.map((brand)=>{
                    return<div>
                        <div className='top-brands-cover'>
                            <img src={brand. cover} className='top-brands-image' alt={brand.time} />


                        </div>


                    </div>




                })}

    
            


            </Slider>
        </div>
    )
}

export default TopBrands
