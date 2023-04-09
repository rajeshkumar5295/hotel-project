import React from 'react';
import "./Footer.css";
import Logo from "../assets/DS.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer__top' >
        <div className="footer">
            <div className="footer__left">
            <Link to="/" style={{textDecoration:'none'}} >
         <img src={Logo} alt='' className='header__logo' />  
         </Link>
                {/* <img src={Logo} alt="" className='logo__header__footer' /> */}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'300px' }} >
                   <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="" />
                   <img src="https://img.icons8.com/ios-glyphs/24/ffffff/instagram-new.png" alt="" />
                   <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter--v1.png" alt="" />
                   <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin" alt="" />
                </div>
            </div>
            <div className="footer__right">
                <div className="address__footer" style={{display:'flex',alignItems:'center',padding:'10px'}} >
                    <img src="https://img.icons8.com/material-outlined/24/ffffff/marker.png" alt="" style={{marginLeft:'34px',width:'19px'}}  />
                    Shop No.3/26A, Banglore Agrasen Marg, UV Block, Assam Bagh, Orisa, 110062
                </div>
                <div  style={{display:'flex',alignItems:'center',padding:'10px'}}>
                    <img src=" https://img.icons8.com/material-outlined/24/ffffff/new-post.png  " alt=""style={{marginLeft:'34px',width:'19px'}} />
                      KalluMallu@gmail.com
                </div>
                <div  style={{display:'flex',alignItems:'center',padding:'10px'}}>
                    <img src="   " alt="" style={{marginLeft:'34px',width:'19px'}}/>
                    +91 6206098820 
                </div>
            </div>
        </div>
        <div>
            <p>Copyright &#169;2023 All rights reserved </p>
        </div>

    </div>
  )
}

export default Footer;