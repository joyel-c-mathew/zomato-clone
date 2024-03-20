import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className='container'>
      <img
        src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='zomato-logo'
        className='header-logo mb-5'
      />
      <div className='row'>
        <div className='col-sm-2'>
          <h6 className='mb-4' style={{ color: 'black', letterSpacing: '3px' }}>ABOUT ZOMATO</h6>
          <div style={{ lineHeight: '9px' }} className='text-muted'>
            <p>Who We Are</p>
            <p>blog</p>
            <p>Work with us</p>
            <p>Investor Relations</p>
            <p>Report fraud</p>
            <p>Press kit</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className='col-sm-2'>
          <h6 className='mb-4' style={{ color: 'black', letterSpacing: '3px' }}>ZOMAVERE</h6>
          <div style={{ lineHeight: '9px' }} className='text-muted'>
            <p>Zomato</p>
            <p>Blinkit</p>
            <p>Feeding India</p>
            <p>Hyperpure</p>
            <p>Zomaland</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <h6 className='mb-4' style={{ color: 'black', letterSpacing: '3px' }}>FOR RESTAURANTS</h6>
          <div style={{ lineHeight: '9px' }} className='text-muted'>
            <p>Partner with us</p>
            <p>Apps for you</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <h6 className='mb-4' style={{ color: 'black', letterSpacing: '3px' }}>LEARN MORE</h6>
          <div style={{ lineHeight: '9px' }} className='text-muted'>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
        </div>
        <div className='col-sm-2 '>
          <h6 className='mb-4' style={{ color: 'black', letterSpacing: '3px' }}>SOCIAL LINKS</h6>
          <div >
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '15px', borderRadius: '50%', background: 'black', padding: '5px', color: 'white' }} className='me-2' />
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '15px', borderRadius: '50%', background: 'black', padding: '5px', color: 'white' }} className='me-2' />
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '15px', borderRadius: '50%', background: 'black', padding: '5px', color: 'white' }} className='me-2' />
            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '15px', borderRadius: '50%', background: 'black', padding: '5px', color: 'white' }} className='me-2' />
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '15px', borderRadius: '50%', background: 'black', padding: '5px', color: 'white' }} />

          </div>
          <img className='mt-3' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" width={'150px'} height={'40px'} alt='' />

          <img className='mt-3' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" width={'150px'} height={'40px'} alt='' />



        </div>
        
      </div>
    </div>
  );
};

export default Footer;
