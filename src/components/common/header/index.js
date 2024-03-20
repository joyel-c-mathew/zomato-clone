import React from 'react'
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot,faCaretDown,faMagnifyingGlass,faAngleDown} from  '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="max-width header"> 

            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                alt='zomato-logo'
                className='header-logo' />

            <div className='header-right'>
                <div className='header-location-search-container'>

                    <div className='location-wrapper'>
                        <div className='location-icon-name'>

                        <FontAwesomeIcon    icon={faLocationDot} style={{marginLeft:'1.4rem',color:' #ff7e8b',marginTop:'0.2rem' , fontSize:'20px',}}/>

                        <div style={{marginLeft:'0.6rem',margintop:'0rem',justifyContent:'center'}}>Neemrana</div>



                        </div>
                        {/* <i class="fi fi-rr-caret-down"></i> */}
                        <FontAwesomeIcon icon={faCaretDown}   style={{marginLeft:'1.4rem', fontWeight:'bold',color:'black',fontStyle:'bold' , fontSize:'20px',marginRight:'8px'}} />

                    </div>
                    <div className='location-search-separator'></div>
                    <div  className='header-searchbar'>

                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:'20px',color:'#828282',margin:'0px 12px',fontWeight:'bold',marginTop:'',alignItems:'center'}} />
                    <input placeholder='Search for resturant,cuisine or a dish '
                    className='search-input'/>
                    </div>



                </div>
                <div className='profile-wrapper' >
                    <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C1003A100&crop=100%3A100%3B%2A%2C%2A%' alt='logo' className='header-profile-image'/>

                    <span className='header-user-name'>user</span>
                    <FontAwesomeIcon icon={faAngleDown}  style={{marginLeft:'-2rem',fontsize:'20px'}}/>
                </div>

            </div>
        </div>
    )
} 

export default Header
